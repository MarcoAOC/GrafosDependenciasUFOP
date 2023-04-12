<script setup>
import { ref, toRef, watch, onMounted } from 'vue';
import { Network } from 'vis-network/esnext'
import { DataSet } from 'vis-data/esnext'
import "vis-network/styles/vis-network.css";

const props = defineProps(['selectedCourse'])
const selectedCourse = toRef(props, 'selectedCourse')

const visNetwork = ref(null);
const initialLocalStorage = ref(null);

function updateLocalStorage(networkInfo) {
  const { taken, code, available } = networkInfo
  localStorage.setItem("code", code)
  localStorage.setItem("taken", JSON.stringify(taken))
  localStorage.setItem("available", JSON.stringify(available))
}

function resetLocalStorage() {
  localStorage.removeItem("code")
  localStorage.removeItem("taken")
  localStorage.removeItem("available")
  initialLocalStorage.value = null
}

function loadFromLocalStorage() {
  return {
    code: localStorage.getItem("code"),
    taken: JSON.parse(localStorage.getItem("taken")),
    available: JSON.parse(localStorage.getItem("available")),
  }
}

function getNodeSetFromDisciplinesFile(disciplines) {
  const groupedDisciplines = disciplines.reduce((groups, item) => {
    const level = item.level;
    if (!groups[level]) {
      groups[level] = [];
    }
    groups[level].push(item);
    return groups;
  }, {});

  return new DataSet(Object.keys(groupedDisciplines).map(level => {
    return groupedDisciplines[level].map((discipline, idx) => ({ ...discipline, fixed: { x: true }, y: idx * 100, x: discipline.level * 300 }))
  }).flat());
}
function updateNodes(nodesSet, edgesSet, network, taken, available) {
  const edges = edgesSet.get({ returnType: 'Object' });
  nodesSet.forEach(function (node) {
    const connEdges = network.getConnectedEdges(node.id);

    for (let j = 0; j < connEdges.length; j++) {
      if (!taken[node.id] && edges[connEdges[j]].to == node.id && !taken[edges[connEdges[j]].from]) {
        available[node.id] = false;
        node.color = gray;
        nodesSet.update(node);
        return;
      }
    }
    available[node.id] = true;
    if (taken[node.id])
      node.color = blue;
    else
      node.color = green;

    nodesSet.update(node);
  });
  updateLocalStorage({ code: props.selectedCourse.id, taken, available })
}
const networkEventHandlerGenerator = (nodesSet, edgesSet, network, taken, available) => {
  network.on("dragEnd", network.unselectAll)
  network.on("click", function (params) {
    const selectedNodeId = network.getNodeAt(params.pointer.DOM);
    if (selectedNodeId == undefined)
      return;

    const selectedNode = nodesSet.get(selectedNodeId)
    if (taken[selectedNodeId]) {
      taken[selectedNodeId] = false;
      if (available[selectedNodeId])
        selectedNode.color = green;
      else
        selectedNode.color = gray;
    } else {
      taken[selectedNodeId] = true;
      selectedNode.color = blue
    }
    nodesSet.update(selectedNode)

    updateNodes(nodesSet, edgesSet, network, taken, available)
  });
}

const mountAndActInNetwork = (newSelectedCourse) => {
  const taken = initialLocalStorage.value && initialLocalStorage.value.taken ? initialLocalStorage.value.taken : {}
  const available = initialLocalStorage.value && initialLocalStorage.value.available ? initialLocalStorage.value.available : {}
  resetLocalStorage()
  const disciplines = newSelectedCourse.file.nodes
  const edgesSet = new DataSet(newSelectedCourse.file.edges)
  const nodesSet = getNodeSetFromDisciplinesFile(disciplines)
  const network = new Network(visNetwork.value, { nodes: nodesSet, edges: edgesSet }, options);

  updateNodes(nodesSet, edgesSet, network, taken, available)
  networkEventHandlerGenerator(nodesSet, edgesSet, network, taken, available)
}

watch(selectedCourse, (newSelectedCourse) => {
  mountAndActInNetwork(newSelectedCourse)
})

onMounted(() => {
  initialLocalStorage.value = loadFromLocalStorage()
})
const gray = {
  border: 'rgba(137,140,139,0.75)',
  background: 'rgba(197,209,204,0.75)',
}
const blue = {
  border: 'rgba(43,124,233,1)',
  background: 'rgba(151,194,252,1)',
}
const green = {
  border: 'rgba(43,233,124,1)',
  background: 'rgba(151,252,194,1)',
}
const options = {
  autoResize: true,
  nodes: {
    color: gray,
    shape: 'box',
  },
  edges: {
    arrows: 'to',
    smooth: {
      type: 'horizontal',
      forceDirection: 'horizontal',
      roundness: 0.4,
    }
  },
  physics: false,
  interaction: {
    selectable: false,
  },
};

</script>

<template>
  <div class="w-full h-full" ref="visNetwork"></div>
</template>

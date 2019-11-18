export function listSort(plots) {
  let maxLength = 0;
  // 获取最大层次
  for (let plot of plots) {
    let len = plot.plotNum.split("-").length;
    if (maxLength < len) {
      maxLength = len;
    }
  }
  let layer = 0;
  let data = {};
  for (let plot of plots) {
    let layerNames = plot.plotNum.split("-");
    for (let i in layerNames) {
      layerNames[i] = parseInt(layerNames[i]) + 1;
    }
    let tmpLayerData = data;
    for (let i = 0; i < layerNames.length; i++) {
      if (tmpLayerData[layerNames[i]] == undefined) {
        tmpLayerData[layerNames[i]] = {};
      }
      if (i == layerNames.length - 1) {
        tmpLayerData[layerNames[i]][0] = plot;
      } else {
        tmpLayerData = tmpLayerData[layerNames[i]];
      }
    }
  }
  let sortList = [];

  function sort(data) {
    for (let element in data) {
      if (
        data[element].hasOwnProperty("plotNum") &&
        data[element].hasOwnProperty("plotId")
      ) {
        sortList.push(data[element]);
      } else {
        sort(data[element]);
      }
    }
  }
  sort(data);
  return sortList;
}

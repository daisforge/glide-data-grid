import{R as e}from"./iframe-BpdqTV6w.js";import{D as i}from"./data-editor-all-BMy-LLlm.js";import{B as m,D as d,u as p,d as c}from"./utils-C53zzJRS.js";import{S as u}from"./story-utils-20rZ4X84.js";import"./preload-helper-C1FmrZbK.js";import"./image-window-loader-B_cIY16f.js";import"./throttle-DYCoTQ5D.js";import"./marked.esm-vTO6b3vH.js";import"./flatten-IZA8y47y.js";import"./scrolling-data-grid-BdQoRAiR.js";import"./index-D_kXk1yT.js";import"./useResizeDetector-Devvj5Ux.js";const _={title:"Glide-Data-Grid/DataEditor Demos",decorators:[r=>e.createElement(u,null,e.createElement(m,{title:"Editable Grid",description:e.createElement(d,null,"Data grid supports overlay editors for changing values. There are bespoke editors for numbers, strings, images, booleans, markdown, and uri.")},e.createElement(r,null)))]},t=()=>{const{cols:r,getCellContent:s,setCellValue:n}=p(6,!1);return e.createElement(i,{...c,getCellContent:s,columns:r,rows:20,onCellEdited:n})};var o,a,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    setCellValue
  } = useMockDataGenerator(6, false);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rows={20} onCellEdited={setCellValue} />;
}`,...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const v=["SmallEditableGrid"];export{t as SmallEditableGrid,v as __namedExportsOrder,_ as default};

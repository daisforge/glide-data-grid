import{R as e}from"./iframe-BqX3SJh0.js";import{D as u}from"./data-editor-all-CPxY6Ydg.js";import{B as C,D as f,P as k,u as R,d as M}from"./utils-rquZrkeB.js";import{S as g}from"./story-utils-BgA1eEdk.js";import{V as w,a7 as s,I as D}from"./image-window-loader-C14jCs7k.js";import"./preload-helper-C1FmrZbK.js";import"./throttle-DO4g7BTK.js";import"./flatten-Cojuv5mr.js";import"./scrolling-data-grid-BGZJL4UH.js";import"./marked.esm-CZqCbZew.js";import"./index-D_kXk1yT.js";import"./useResizeDetector-DJnqRuN1.js";const _={title:"Glide-Data-Grid/DataEditor Demos",decorators:[n=>e.createElement(g,null,e.createElement(C,{title:"Custom renderers",description:e.createElement(f,null,"Override internal cell renderers by passing the "," ",e.createElement(k,null,"renderers")," prop.")},e.createElement(n,null)))]},t=()=>{const{cols:n,getCellContent:m}=R(100,!0,!0),p=e.useMemo(()=>[...w,{...s,draw:(l,a)=>{const{ctx:o,rect:r}=l;o.fillStyle="#ffe0e0",o.fillRect(r.x,r.y,r.width,r.height),a.kind===D.Marker&&s.draw(l,a)}}],[]);return e.createElement(u,{...M,getCellContent:m,columns:n,rows:200,rowMarkers:"both",renderers:p})};var d,i,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(100, true, true);
  const renderers = React.useMemo<readonly InternalCellRenderer<InnerGridCell>[]>(() => {
    return [...AllCellRenderers, {
      ...markerCellRenderer,
      draw: (args, cell) => {
        const {
          ctx,
          rect
        } = args;
        ctx.fillStyle = "#ffe0e0";
        ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
        if (cell.kind === InnerGridCellKind.Marker) {
          markerCellRenderer.draw(args as DrawArgs<MarkerCell>, cell as MarkerCell);
        }
      }
    } as InternalCellRenderer<InnerGridCell>];
  }, []);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rows={200} rowMarkers="both" renderers={renderers} />;
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const B=["OverrideMarkerRenderer"];export{t as OverrideMarkerRenderer,B as __namedExportsOrder,_ as default};

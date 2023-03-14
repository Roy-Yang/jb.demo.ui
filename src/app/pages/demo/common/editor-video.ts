declare var Quill: any;
const BlockEmbed = Quill.import('blots/block/embed');
class VideoBlot extends BlockEmbed {
  static create(value: any) {
    let node = super.create();
    node.setAttribute('src', value.url);
    node.setAttribute('controls', value.controls);
    node.setAttribute('width', value.width);
    node.setAttribute('height', value.height);
    node.setAttribute('webkit-playsinline', true);
    node.setAttribute('playsinline', true);
    node.setAttribute('x5-playsinline', true);
    node.setAttribute('preload', 'metadata');
    return node;
  }

  static value(node: any) {
    return {
      url: node.getAttribute('src'),
      controls: node.getAttribute('controls'),
      width: node.getAttribute('width'),
      height: node.getAttribute('height'),
    };
  }
}
VideoBlot['blotName'] = 'video';
VideoBlot['className'] = 'video';
VideoBlot['tagName'] = 'video';
export default VideoBlot;

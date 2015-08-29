"use strict";!function(e,t,n){n.log("WebNext: IIFE Wrapper Started"),e.onload=function(){function o(n){var o,a,d=t.getElementById(n);t.body.createTextRange?(o=t.body.createTextRange(),o.moveToElementText(d),o.select()):e.getSelection&&(a=e.getSelection(),o=t.createRange(),o.selectNodeContents(d),a.removeAllRanges(),a.addRange(o))}n.log("WebNext: Page Loaded"),t.getElementById("bos-email").addEventListener("mouseover",function(){o("bos-email")})}}(window,document,console);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsid2luZG93IiwiZG9jdW1lbnQiLCJjb25zb2xlIiwibG9nIiwib25sb2FkIiwic2VsZWN0VGV4dCIsImVsZW1lbnQiLCJyYW5nZSIsInNlbGVjdGlvbiIsInRleHQiLCJnZXRFbGVtZW50QnlJZCIsImJvZHkiLCJjcmVhdGVUZXh0UmFuZ2UiLCJtb3ZlVG9FbGVtZW50VGV4dCIsInNlbGVjdCIsImdldFNlbGVjdGlvbiIsImNyZWF0ZVJhbmdlIiwic2VsZWN0Tm9kZUNvbnRlbnRzIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiQUFJQSxjQUFBLFNBQVVBLEVBQVFDLEVBQVVDLEdBRTNCQSxFQUFRQyxJQUFJLGlDQUdaSCxFQUFPSSxPQUFTLFdBSWYsUUFBU0MsR0FBV0MsR0FFbkIsR0FDQUMsR0FBT0MsRUFESEMsRUFBT1IsRUFBU1MsZUFBZUosRUFFL0JMLEdBQVNVLEtBQUtDLGlCQUNqQkwsRUFBUU4sRUFBU1UsS0FBS0Msa0JBQ3RCTCxFQUFNTSxrQkFBa0JKLEdBQ3hCRixFQUFNTyxVQUNJZCxFQUFPZSxlQUNqQlAsRUFBWVIsRUFBT2UsZUFDbkJSLEVBQVFOLEVBQVNlLGNBQ2pCVCxFQUFNVSxtQkFBbUJSLEdBQ3pCRCxFQUFVVSxrQkFDVlYsRUFBVVcsU0FBU1osSUFoQnJCTCxFQUFRQyxJQUFJLHdCQXdCWkYsRUFBU1MsZUFBZSxhQUFhVSxpQkFBaUIsWUFBYSxXQUNsRWYsRUFBVyxpQkFRWEwsT0FBUUMsU0FBVUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltbWVkaWF0ZWx5LWludm9rZWQgZnVuY3Rpb24gZXhwcmVzc2lvblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL215aG9ub3IxNi93ZWJuZXh0L3dpa2kvSUlGRVxuLy8gQmVzdCB1c2VkIHdpdGggYSBtaW5pZmllclxuXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgY29uc29sZSl7XG5cdC8vIFJ1biBvbiBFeGVjdXRpb25cblx0Y29uc29sZS5sb2coJ1dlYk5leHQ6IElJRkUgV3JhcHBlciBTdGFydGVkJyk7XG5cblx0Ly8gUnVuIG9uIHdpbmRvdy5vbmxvYWRcblx0d2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zb2xlLmxvZygnV2ViTmV4dDogUGFnZSBMb2FkZWQnKTtcblxuXHRcdC8vIFNlbGVjdHMgdGV4dCBvbiBob3ZlclxuXHRcdGZ1bmN0aW9uIHNlbGVjdFRleHQoZWxlbWVudCkge1xuXHRcdFx0Ly8gdmFyIGRvYyA9IGRvY3VtZW50LFxuXHRcdFx0dmFyIHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50KSxcblx0XHRcdHJhbmdlLCBzZWxlY3Rpb247XG5cdFx0XHRpZiAoZG9jdW1lbnQuYm9keS5jcmVhdGVUZXh0UmFuZ2UpIHtcblx0XHRcdFx0cmFuZ2UgPSBkb2N1bWVudC5ib2R5LmNyZWF0ZVRleHRSYW5nZSgpO1xuXHRcdFx0XHRyYW5nZS5tb3ZlVG9FbGVtZW50VGV4dCh0ZXh0KTtcblx0XHRcdFx0cmFuZ2Uuc2VsZWN0KCk7XG5cdFx0XHR9IGVsc2UgaWYgKHdpbmRvdy5nZXRTZWxlY3Rpb24pIHtcblx0XHRcdFx0c2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuXHRcdFx0XHRyYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG5cdFx0XHRcdHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyh0ZXh0KTtcblx0XHRcdFx0c2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xuXHRcdFx0XHRzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vICQoJyNib3MtZW1haWwnKS5tb3VzZW92ZXIoZnVuY3Rpb24oKSB7XG5cdFx0Ly8gXHRzZWxlY3RUZXh0KCdib3MtZW1haWwnKTtcblx0XHQvLyB9KTtcblxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3MtZW1haWwnKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBmdW5jdGlvbigpIHtcblx0XHRcdHNlbGVjdFRleHQoJ2Jvcy1lbWFpbCcpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdC8vIFlvdXIgY29kZSBoZXJlXG5cdC8vIHZhciBmb28gPSAnYmFyJztcblx0Ly8gd2luZG93LmZvbyA9IGZvbztcblxufSkod2luZG93LCBkb2N1bWVudCwgY29uc29sZSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
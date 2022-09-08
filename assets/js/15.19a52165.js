(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{749:function(_,t,v){"use strict";v.r(t);var a=v(11),e=Object(a.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h2",{attrs:{id:"tcp-头部格式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp-头部格式"}},[_._v("#")]),_._v(" TCP 头部格式")]),_._v(" "),v("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://cdn.jsdelivr.net/gh/lorrainecyw/PhotoStorage@main/blogImage/1654331220960-bf4fce9e-de2d-4062-ba77-96b9021b0588.png",alt:")IZU17BT5XCHU5T9QTL(2)V.png"}}),_._v(" "),v("p",[v("strong",[_._v("标志位的含义")])]),_._v(" "),v("ol",[v("li",[_._v("URG：紧急指针（urgent pointer）有效")]),_._v(" "),v("li",[_._v("ACK：确认序号有效")]),_._v(" "),v("li",[_._v("PSH：接收方应该尽快将这个报文交给应用层，表示有数据传输")]),_._v(" "),v("li",[_._v("RST：重置连接")]),_._v(" "),v("li",[_._v("SYN：发起一个新连接（建立连接）")]),_._v(" "),v("li",[_._v("FIN：释放一个连接（断开连接）")])]),_._v(" "),v("h2",{attrs:{id:"tcp-建立连接-三次握手"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp-建立连接-三次握手"}},[_._v("#")]),_._v(" TCP 建立连接（三次握手）")]),_._v(" "),v("h3",{attrs:{id:"具体过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#具体过程"}},[_._v("#")]),_._v(" 具体过程")]),_._v(" "),v("ol",[v("li",[_._v("客户端随机初始化序列号，将 SYN 标志位置为 1，发送报文给服务端，表示请求建立连接，然后客户端处    "),v("code",[_._v("SYN_SENT")]),_._v("状态")]),_._v(" "),v("li",[_._v("服务端接收到客户端发来的报文后，也随机初始化序列号，将 TCP 报文的确认应答号置为客户端发来的序列号 + 1，并将 SYN 和 ACK 标志位都置为 1，将报文发送给客户端，然后服务端进入"),v("code",[_._v("SYN_RCVD")]),_._v("状态")]),_._v(" "),v("li",[_._v("客户端接收到服务端发来的报文后，确认报文里的 ACK 为 1，并且确认应答号为自己发出去的序列号 + 1 后，将新报文的确认应答号置为服务端发来的序列号 + 1，ACK 也置为 1，将报文发送给服务端，然后客户端进入"),v("code",[_._v("ESTABLISHED")]),_._v("状态；服务端收到客户端发来的报文，确认无误后，也进入"),v("code",[_._v("ESTABLISHED")]),_._v("状态，连接建立")])]),_._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://cdn.jsdelivr.net/gh/lorrainecyw/PhotoStorage@main/blogImage/1654830583881-8816daf0-668b-412a-9fc4-0d35fa533323.jpeg"}}),_._v(" "),v("h3",{attrs:{id:"为什么需要三次握手-而不是两次"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要三次握手-而不是两次"}},[_._v("#")]),_._v(" 为什么需要三次握手，而不是两次")]),_._v(" "),v("ol",[v("li",[v("strong",[_._v("同步双方的初始序列号")]),_._v(" "),v("ol",[v("li",[_._v("为了实现数据的可靠传输，所以发送方和接收方都需要维护一个序列号，以此来标识发出去的数据包哪些是被另一方接收到的")]),_._v(" "),v("li",[_._v("三次握手能保证双方都能确认对方收到了自己发出去的其实序列号，而二次握手只有发送方能够确认")])])]),_._v(" "),v("li",[v("strong",[_._v("避免历史连接")]),_._v(" "),v("ol",[v("li",[_._v("三次握手的过程中，客户端在收到历史连接的时候，即发现确认应答号不对时，可以发送 RST 报文终止这个历史连接，此时服务端还未开始发送数据")]),_._v(" "),v("li",[_._v("二次握手的过程中，服务端收到历史连接，发送报文给客户端后，就会进入"),v("code",[_._v("ESTABLISHED")]),_._v("状态，于是就开始发送数据，等到客户端发现确认应答号不对，发送 RST 报文给服务端，这时服务端已经发送过数据了，造成了资源的浪费")])])]),_._v(" "),v("li",[v("strong",[_._v("避免资源浪费")]),_._v(" "),v("ol",[v("li",[_._v("二次握手的过程中，由于服务端无法判断这是否为历史连接，所以每当收到一个 SYN 报文，服务端就会建立一个连接，这样容易造成资源的浪费")])])])]),_._v(" "),v("h3",{attrs:{id:"如果已经建立了连接-但是客户端突然出现故障了怎么办"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如果已经建立了连接-但是客户端突然出现故障了怎么办"}},[_._v("#")]),_._v(" 如果已经建立了连接，但是客户端突然出现故障了怎么办？")]),_._v(" "),v("p",[_._v("客户端如果出现故障，服务器不能一直等下去，白白浪费资源。服务端有一个保活计时器，每收到一次客户端的请求后都会重新复位这个计时器，时间通常是设置为2小时，若两小时还没有收到客户端的任何数据，服务器就会发送一个探测报文段，以后每隔75秒钟发送一次。若一连发送10个探测报文仍然没反应，服务器就认为客户端出了故障，就关闭连接。")]),_._v(" "),v("h2",{attrs:{id:"tcp-断开连接-四次挥手"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp-断开连接-四次挥手"}},[_._v("#")]),_._v(" TCP 断开连接（四次挥手）")]),_._v(" "),v("h3",{attrs:{id:"具体过程-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#具体过程-2"}},[_._v("#")]),_._v(" 具体过程")]),_._v(" "),v("ol",[v("li",[_._v("客户端随机初始化序列号，将 FIN 标志位置为 1，将报文发送给服务端，客户端进入"),v("code",[_._v("FIN_WAIT_1")]),_._v("状态")]),_._v(" "),v("li",[_._v("服务端收到报文后，将 ACK 置为 1，确认应答号置为客户端发来的序列号 + 1，将报文发给客户端，服务端进入"),v("code",[_._v("CLOSED_WAIT")]),_._v("状态，客户端收到报文后，进入"),v("code",[_._v("FIN_WAIT_2")]),_._v("状态")]),_._v(" "),v("li",[_._v("服务端处理完数据后，将 FIN 置为 1，发送报文给客户端，服务端进入"),v("code",[_._v("LAST_ACK")]),_._v("状态")]),_._v(" "),v("li",[_._v("客户端收到服务端的报文后，将 ACK 置为 1，确认应答号置为服务端发来的序列号 + 1，将报文发送给服务端，然后客户端进入"),v("code",[_._v("TIME_WAIT")]),_._v("状态；服务端接收到报文后，确认无误后，进入"),v("code",[_._v("CLOSED")]),_._v("状态；客户端等待"),v("code",[_._v("2MSL")]),_._v("后，也进入"),v("code",[_._v("CLOSED")]),_._v("状态，连接断开")])]),_._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://cdn.jsdelivr.net/gh/lorrainecyw/PhotoStorage@main/blogImage/1654334345547-1b981915-2a70-402b-920a-94a6227e24b7.jpeg"}}),_._v(" "),v("h3",{attrs:{id:"为什么是四次挥手-而不是三次"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么是四次挥手-而不是三次"}},[_._v("#")]),_._v(" 为什么是四次挥手，而不是三次")]),_._v(" "),v("p",[_._v("服务端接收到客户端发来的 FIN 报文后，会发送 ACK 报文给客户端，并进入"),v("code",[_._v("CLOSED_WAIT")]),_._v("状态。这个状态是为了让服务端能够将还未发完的数据等传送给客户端。等到数据都发完了，服务端会发送 FIN 报文给客户端，客户端就知道可以断开连接了。所以服务端不能同时发送 ACK 和 FIN 报文")]),_._v(" "),v("h3",{attrs:{id:"为什么客户端处于timed-wait状态要等待2msl时间呢"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么客户端处于timed-wait状态要等待2msl时间呢"}},[_._v("#")]),_._v(" 为什么客户端处于"),v("code",[_._v("TIMED_WAIT")]),_._v("状态要等待"),v("code",[_._v("2MSL")]),_._v("时间呢")]),_._v(" "),v("p",[v("code",[_._v("MSL")]),_._v("：最大报文段生存时间，任何报文在网络中存在的最大时长，如果超过这个时间，那么报文就会被丢弃")]),_._v(" "),v("ol",[v("li",[_._v("保证客户端发送给服务端的确认报文能够被服务端接收，如果服务端一直没有收到确认报文，那么服务端就会重传 FIN 报文给客户端，最差的情况：确认报文（MSL）+ FIN 报文（MSL），正好 2MSL")]),_._v(" "),v("li",[_._v("保证本次断开连接的过程中，产生的所有报文都能够消失，避免影响到下一次 TCP 连接")])])])}),[],!1,null,null,null);t.default=e.exports}}]);
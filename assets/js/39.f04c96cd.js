(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{771:function(e,a,t){"use strict";t.r(a);var s=t(11),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("创建线程需要调用操作系统内核的 API，然后操作系统需要为线程分配一系列的资源，所以线程是一个重量级的对象，应该尽量避免频繁创建和销毁。而避免的方法，就是采用线程池技术\n一般意义的池化资源，通常是这样使用的：调用"),t("code",[e._v("acquire()")]),e._v("申请资源，调用"),t("code",[e._v("release()")]),e._v("释放资源\n假设线程池也采用这种方式，通过"),t("code",[e._v("acquire()")]),e._v("获取到一个空闲线程 T1，接下来，希望通过调用 T1 的"),t("code",[e._v("execute()")]),e._v("方法，传入一个"),t("code",[e._v("Runnable")]),e._v("对象来执行具体业务逻辑，就像通过构造函数"),t("code",[e._v("Thread(Runnable target)")]),e._v("创建线程一样。可惜，Thread 对象的所有方法中，都不存在类似"),t("code",[e._v("execute(Runnable target)")]),e._v("这样的公共方法\n"),t("strong",[e._v("线程池是一种“生产者 - 消费者”模式")])]),e._v(" "),t("h2",{attrs:{id:"如何使用-java-的线程池"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何使用-java-的线程池"}},[e._v("#")]),e._v(" 如何使用 Java 的线程池")]),e._v(" "),t("p",[e._v("Java 提供的线程池相关的工具类中，最核心的是"),t("code",[e._v("ThreadPoolExecutor")]),e._v("，"),t("code",[e._v("ThreadPoolExecutor")]),e._v("最完备的构造函数有 7 个参数")]),e._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ThreadPoolExecutor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" corePoolSize"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" maximumPoolSize"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("long")]),e._v(" keepAliveTime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("TimeUnit")]),e._v(" unit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("BlockingQueue")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Runnable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v(" workQueue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ThreadFactory")]),e._v(" threadFactory"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("RejectedExecutionHandler")]),e._v(" handler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" \n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br")])]),t("p",[e._v("线程池可以看成项目组")]),e._v(" "),t("ol",[t("li",[t("code",[e._v("corePoolSize")]),e._v("：核心线程数，表示线程池保有的最小线程数。有些项目很闲，但是也不能把人都撤了，至少要留"),t("code",[e._v("corePoolSize")]),e._v("个人坚守阵地")]),e._v(" "),t("li",[t("code",[e._v("maximumPoolSize")]),e._v("：表示线程池创建的最大线程数。当项目很忙时，就需要加人，但是也不能无限制地加，最多就加到"),t("code",[e._v("maximumPoolSize")]),e._v("个人。当项目闲下来时，就要撤人了，最多能撤到"),t("code",[e._v("corePoolSize")]),e._v("个人")]),e._v(" "),t("li",[t("code",[e._v("keepAliveTime & unit")]),e._v("：定义了“一段时间”，如果一个线程空闲了"),t("code",[e._v("keepAliveTime & unit")]),e._v("这么久，而且线程池的线程数大于"),t("code",[e._v("corePoolSize")]),e._v("，那么这个空闲的线程就要被回收了")]),e._v(" "),t("li",[t("code",[e._v("workQueue")]),e._v("：工作队列，用来存放任务")]),e._v(" "),t("li",[t("code",[e._v("threadFactory")]),e._v("：通过这个参数可以自定义如何创建线程，例如可以给线程指定一个有意义的名字")]),e._v(" "),t("li",[t("code",[e._v("handler")]),e._v("：指定拒绝策略。如果线程池中所有的线程都在忙碌，并且工作队列也满了（前提是工作队列是有界队列），那么此时提交任务，线程池就会拒绝接收。ThreadPoolExecutor 已经提供了以下 4 种拒绝策略：\n"),t("ol",[t("li",[t("code",[e._v("CallerRunsPolicy")]),e._v("：提交任务的线程（调用者线程）自己去执行这个任务")]),e._v(" "),t("li",[t("code",[e._v("AbortPolicy")]),e._v("：默认的拒绝策略，会抛出"),t("code",[e._v("RejectedExecutionException")])]),e._v(" "),t("li",[t("code",[e._v("DiscardPolicy")]),e._v("：直接丢弃任务，没有任何异常抛出")]),e._v(" "),t("li",[t("code",[e._v("DiscardOldestPolicy")]),e._v("：丢弃最老的任务，其实就是把最早进入工作队列的任务丢弃，然后尝试把新任务加入到工作队列")])])])]),e._v(" "),t("h2",{attrs:{id:"线程池的工作原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程池的工作原理"}},[e._v("#")]),e._v(" 线程池的工作原理")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/png/22396700/1661264760340-755281c5-5980-4d1d-8749-0bbfe64fcfb6.png#clientId=u0335ce1e-b310-4&crop=0.0067&crop=0&crop=1&crop=1&from=paste&height=275&id=ue8de3d49&margin=%5Bobject%20Object%5D&name=image.png&originHeight=418&originWidth=1212&originalType=binary&ratio=1&rotation=0&showTitle=false&size=70416&status=done&style=none&taskId=u1f48c188-eca1-446e-bce8-f8853fd0b16&title=&width=798",alt:"image.png"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);
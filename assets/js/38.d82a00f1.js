(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{770:function(t,s,a){"use strict";a.r(s);var n=a(11),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("之前解决"),a("code",[t._v("count += 1")]),t._v("的原子性问题的时候是采用互斥锁的方案，但其实对于简单的原子性问题，还有一种无锁方案 —— 原子类。无锁相对于互斥锁方案来说，最大的好处是提高了性能。互斥锁方案为了保证互斥性，需要执行"),a("strong",[t._v("加锁、解锁")]),t._v("操作，而加锁、解锁操作本身就消耗性能；同时拿不到锁的线程还会进入阻塞状态，进而触发线程切换，"),a("strong",[t._v("线程切换")]),t._v("对性能的消耗也很大。简单用原子类实现累加器：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Test")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AtomicLong")]),t._v(" count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AtomicLong")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add10K")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" index "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tcount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAndIncrement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("h2",{attrs:{id:"无锁方案的实现原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#无锁方案的实现原理"}},[t._v("#")]),t._v(" 无锁方案的实现原理")]),t._v(" "),a("p",[t._v("CPU 为了解决并发问题，提供了 CAS 指令（CAS，全称是"),a("code",[t._v("Compare And Swap")]),t._v("，即“比较并交换”）。CAS 指令包含 3 个参数：共享变量的内存地址 A、用于比较的值 B、共享变量的新值 C；并且只有当内存中地址 A 处的值等于 B 时，才能将内存中地址 A 处的值更新为新值 C。作为一条 CPU 指令，CAS 指令本身是能够保证原子性的\n使用 CAS 来解决并发问题，一般都会伴随着"),a("strong",[t._v("自旋")]),t._v("，而所谓自旋，其实就是"),a("strong",[t._v("循环尝试")]),t._v("\n例如：实现一个线程安全的"),a("code",[t._v("count += 1")]),t._v("操作，“"),a("code",[t._v("CAS+ 自旋")]),t._v("”的实现方案如下所示，首先计算"),a("code",[t._v("newValue = count+1")]),t._v("，如果"),a("code",[t._v("cas(count,newValue)")]),t._v("返回的值不等于 count，则意味着线程在执行完代码 ① 处之后，执行代码 ② 处之前，count 的值被其他线程更新过。这时，可以采用自旋方案，重新读 count 最新的值来计算 newValue 并尝试再次更新，直到成功")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SimulatedCAS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("volatile")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 实现 count+=1")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addOne")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tnewValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" count"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//①")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cas")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("newValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//②")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 模拟实现 CAS，仅用来帮助理解")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("synchronized")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cas")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" expect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" newValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 读目前 count 的值")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" curValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 比较目前 count 值是否 == 期望值")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("curValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" expect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果是，则更新 count 的值")]),t._v("\n\t\t\tcount"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回写入前的值")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" curValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br")])]),a("h2",{attrs:{id:"aba-问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aba-问题"}},[t._v("#")]),t._v(" ABA 问题")]),t._v(" "),a("h4",{attrs:{id:"概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),a("p",[t._v("假设 count 原本是 A，线程 1 在执行完代码 ① 处之后，执行代码 ② 处之前，有可能 count 被线程 2 更新成了 B，之后又被 线程 3 更新回了 A，这样线程 1 虽然看到的一直是 A，但是其实已经被其他线程更新过了")]),t._v(" "),a("h4",{attrs:{id:"解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),a("p",[a("code",[t._v("AtomicStampedReference")]),t._v("和"),a("code",[t._v("AtomicMarkableReference")]),t._v(" 这两个原子类可以解决 ABA 问题\n解决 ABA 问题的思路：增加一个版本号，这与乐观锁机制很类似，每次执行 CAS 操作，附加再更新一个版本号，只要保证版本号是递增的，那么即便 A 变成 B 之后再变回 A，版本号也不会变回来（版本号递增的）。"),a("code",[t._v("AtomicStampedReference")]),t._v("实现的 CAS 方法就增加了版本号参数，方法签名如下：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compareAndSet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("V")]),t._v(" expectedReference"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("V")]),t._v(" newReference"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\t\t  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" expectedStamp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" newStamp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[a("code",[t._v("AtomicMarkableReference")]),t._v("的实现机制则更简单，将版本号简化成了一个 Boolean 值，方法签名如下：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compareAndSet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("V")]),t._v(" expectedReference"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("V")]),t._v(" newReference"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\t\t  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" expectedMark"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" newMark"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"atomiclong-的方法详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#atomiclong-的方法详解"}},[t._v("#")]),t._v(" AtomicLong 的方法详解")]),t._v(" "),a("p",[t._v("上面解决"),a("code",[t._v("count += 1")]),t._v("的原子性问题的时候，用原子类"),a("code",[t._v("AtomicLong")]),t._v("的"),a("code",[t._v("getAndIncrement()")]),t._v("方法替代了"),a("code",[t._v("count += 1")]),t._v("，从而实现了线程安全。原子类"),a("code",[t._v("AtomicLong")]),t._v("的"),a("code",[t._v("getAndIncrement()")]),t._v("方法内部就是基于 CAS 实现的\n"),a("code",[t._v("JDK 1.8")]),t._v("中，"),a("code",[t._v("getAndIncrement()")]),t._v("方法会转调"),a("code",[t._v("unsafe.getAndAddLong()")]),t._v("方法，这里"),a("code",[t._v("this")]),t._v("和"),a("code",[t._v("valueOffset")]),t._v("两个参数可以唯一确定共享变量的内存地址")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAndIncrement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" unsafe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAndAddLong")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" valueOffset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1L")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[a("code",[t._v("unsafe.getAndAddLong()")]),t._v("方法首先会在内存中读取共享变量的值，之后循环调用"),a("code",[t._v("compareAndSwapLong()")]),t._v("方法来尝试设置共享变量的值，直到成功为止。"),a("code",[t._v("compareAndSwapLong()")]),t._v("是一个 native 方法，只有当内存中共享变量的值等于 expected 时，才会将共享变量的值更新为 x，并且返回 true；否则返回 fasle。"),a("code",[t._v("compareAndSwapLong")]),t._v("的语义和 CAS 指令的语义的差别仅仅是返回值不同而已")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAndAddLong")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" offset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" delta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 读取内存中的值")]),t._v("\n\t\tv "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLongVolatile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" offset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compareAndSwapLong")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" offset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" delta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 原子性地将变量更新为 x")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 条件是内存中的值等于 expected")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更新成功则返回 true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("native")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compareAndSwapLong")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" offset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" expected"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("p",[t._v("Java 提供的原子类里面 CAS 一般被实现为"),a("code",[t._v("compareAndSet()")]),t._v("，"),a("code",[t._v("compareAndSet()")]),t._v("的语义和 CAS 指令的语义的差别仅仅是返回值不同而已，"),a("code",[t._v("compareAndSet()")]),t._v("里面如果更新成功，则会返回 true，否则返回 false")]),t._v(" "),a("h2",{attrs:{id:"原子类种类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原子类种类"}},[t._v("#")]),t._v(" 原子类种类")]),t._v(" "),a("p",[t._v("可以分成 5 类：")]),t._v(" "),a("ul",[a("li",[t._v("原子化的基本数据类型")]),t._v(" "),a("li",[t._v("原子化的对象引用类型")]),t._v(" "),a("li",[t._v("原子化数组")]),t._v(" "),a("li",[t._v("原子化对象属性更新器")]),t._v(" "),a("li",[t._v("原子化的累加器")])]),t._v(" "),a("h3",{attrs:{id:"_1-原子化的基本数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-原子化的基本数据类型"}},[t._v("#")]),t._v(" 1. 原子化的基本数据类型")]),t._v(" "),a("p",[t._v("相关实现有"),a("code",[t._v("AtomicBoolean")]),t._v("、"),a("code",[t._v("AtomicInteger")]),t._v("、"),a("code",[t._v("AtomicLong")]),t._v("，提供的方法主要有以下这些：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAndIncrement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 原子化 i++")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAndDecrement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 原子化的 i--")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("incrementAndGet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 原子化的 ++i")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("decrementAndGet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 原子化的 --i")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前值 +=delta，返回 += 前的值")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAndAdd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("delta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前值 +=delta，返回 += 后的值")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addAndGet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("delta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//CAS 操作，返回是否成功")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compareAndSet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("expect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" update"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 以下四个方法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 新值可以通过传入 func 函数来计算")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAndUpdate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("func"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateAndGet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("func"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAndAccumulate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("func"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("accumulateAndGet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("func"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])]),a("h3",{attrs:{id:"_2-原子化的对象引用类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-原子化的对象引用类型"}},[t._v("#")]),t._v(" 2. 原子化的对象引用类型")]),t._v(" "),a("p",[t._v("相关实现有"),a("code",[t._v("AtomicReference")]),t._v("、"),a("code",[t._v("AtomicStampedReference")]),t._v("、"),a("code",[t._v("AtomicMarkableReference")]),t._v("，利用它们可以实现对象引用的原子化更新")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("AtomicReference")]),t._v(" 提供的方法和原子化的基本数据类型差不多")]),t._v(" "),a("li",[a("code",[t._v("AtomicStampedReference")]),t._v("和"),a("code",[t._v("AtomicMarkableReference")]),t._v(" 这两个原子类可以解决 "),a("a",{attrs:{href:"#uw5Cb"}},[t._v("ABA 问题")])])]),t._v(" "),a("h3",{attrs:{id:"_3-原子化数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-原子化数组"}},[t._v("#")]),t._v(" 3. 原子化数组")]),t._v(" "),a("p",[t._v("相关实现有"),a("code",[t._v("AtomicIntegerArray")]),t._v("、"),a("code",[t._v("AtomicLongArray")]),t._v("、"),a("code",[t._v("AtomicReferenceArray")]),t._v("，利用这些原子类，可以原子化地更新"),a("strong",[t._v("数组里面的每一个元素")]),t._v("。这些类提供的方法和原子化的基本数据类型的区别仅仅是：每个方法多了一个数组的索引参数")]),t._v(" "),a("h3",{attrs:{id:"_4-原子化对象属性更新器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-原子化对象属性更新器"}},[t._v("#")]),t._v(" 4. 原子化对象属性更新器")]),t._v(" "),a("p",[t._v("相关实现有"),a("code",[t._v("AtomicIntegerFieldUpdater")]),t._v("、"),a("code",[t._v("AtomicLongFieldUpdater")]),t._v("、"),a("code",[t._v("AtomicReferenceFieldUpdater")]),t._v("，利用它们可以原子化地更新对象的属性，这三个方法都是利用"),a("strong",[t._v("反射机制")]),t._v("实现的，创建更新器的方法如下：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("U")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AtomicXXXFieldUpdater")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("U")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("newUpdater")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Class")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("U")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" tclass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" fieldName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("需要注意的是，对象属性必须是 volatile 类型的，只有这样才能保证可见性；如果对象属性不是 volatile 类型的，"),a("code",[t._v("newUpdater()")]),t._v("方法会抛出"),a("code",[t._v("IllegalArgumentException")]),t._v(" 这个运行时异常")]),t._v(" "),a("h3",{attrs:{id:"_5-原子化的累加器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-原子化的累加器"}},[t._v("#")]),t._v(" 5. 原子化的累加器")]),t._v(" "),a("p",[t._v("相关实现："),a("code",[t._v("DoubleAccumulator")]),t._v("、"),a("code",[t._v("DoubleAdder")]),t._v("、"),a("code",[t._v("LongAccumulator")]),t._v("、"),a("code",[t._v("LongAdder")]),t._v("\n累加器仅仅用来执行"),a("strong",[t._v("累加操作")]),t._v("，相比原子化的基本数据类型，速度更快，但是不支持"),a("code",[t._v("compareAndSet()")]),t._v("方法。如果仅仅需要累加操作，使用原子化的累加器性能会更好")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("无锁方案相对于互斥锁方案，有优点，也有缺点")]),t._v(" "),a("ol",[a("li",[t._v("性能好")]),t._v(" "),a("li",[t._v("基本不会出现死锁问题（但可能出现饥饿和活锁问题，因为自旋会反复重试）")]),t._v(" "),a("li",[t._v("Java 提供的原子类能够解决一些简单的原子性问题，但所有原子类的方法都是针对"),a("strong",[t._v("一个共享变量")]),t._v("的，如果需要解决多个变量的原子性问题，建议还是使用互斥锁方案")])])])}),[],!1,null,null,null);s.default=e.exports}}]);
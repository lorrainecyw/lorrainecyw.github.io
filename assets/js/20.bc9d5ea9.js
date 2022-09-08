(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{751:function(s,t,n){"use strict";n.r(t);var a=n(11),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"如何解决原子性问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何解决原子性问题"}},[s._v("#")]),s._v(" 如何解决原子性问题")]),s._v(" "),n("p",[s._v("原子性：所有操作要么全部执行，要么全部不执行。所以"),n("strong",[s._v("在同一时刻只能有一个线程执行")]),s._v("\n从 "),n("a",{attrs:{href:"https://www.yuque.com/lorrainecyw/tgdf97/am0grn",target:"_blank",rel:"noopener noreferrer"}},[s._v("第一讲"),n("OutboundLink")],1),s._v(" 可以知道，原子性问题的源头是线程切换，那么要解决原子性问题就可以通过禁用线程切换来解决，而线程切换依赖于 CPU 中断，那么禁止 CPU 中断就可以解决原子性问题\n在单核时代，确实是可行的，禁止 CPU 中断可以保证获得 CPU 使用权的线程可以不断执行直到执行完成，就不会出现原子性问题。但是在多核时代，由于有多个 CPU，此时禁止 CPU 中断，只能够保证“每个 CPU 上只有一个线程在执行”，并不能保证此刻只有一个线程在执行")]),s._v(" "),n("blockquote",[n("p",[s._v("“同一时刻只有一个线程执行”这个条件非常重要，成为“互斥”，只要保证了对共享变量的修改是互斥的，那么就能够保证原子性")])]),s._v(" "),n("p",[s._v("说到互斥，肯定会想到“锁”。先确定好共享资源（锁要保护的资源），创建保护资源的锁，在进入临界区（需要互斥执行的代码）前，先加锁，执行完临界区的代码后，释放锁。以上就是互斥锁使用的简单介绍，接下来看 java 提供的锁的一种实现："),n("code",[s._v("synchronized")]),s._v("关键字")]),s._v(" "),n("h2",{attrs:{id:"synchronized-关键字"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#synchronized-关键字"}},[s._v("#")]),s._v(" synchronized 关键字")]),s._v(" "),n("h3",{attrs:{id:"_1-synchronized-的用法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-synchronized-的用法"}},[s._v("#")]),s._v(" 1. synchronized 的用法")]),s._v(" "),n("p",[s._v("在使用"),n("code",[s._v("synchronized")]),s._v("时，Java 会默默在"),n("code",[s._v("synchronized")]),s._v("修饰的方法或者代码块前后分别加上加锁和解锁的操作，这样能够保证加锁和解锁这两个操作是成对出现的，不用担心忘记解锁\n"),n("code",[s._v("synchronized")]),s._v("有三种用法：")]),s._v(" "),n("ol",[n("li",[s._v("修饰非静态方法：锁定的是当前实例对象 this")]),s._v(" "),n("li",[s._v("修饰静态方法：锁定的是当前类的 class 对象，因为静态方法是属于类的")]),s._v(" "),n("li",[s._v("修饰代码块：既可以锁定类的 class 对象，也可以锁定实例对象")])]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Test")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//修饰非静态方法，相当于 synchronized(this) void say()")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("synchronized")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("say")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//临界区")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//修饰静态方法，相当于 synchronized(Test.class) void write()")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("synchronized")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("write")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//临界区")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t\n\t"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),s._v(" obj "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("read")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//修饰代码块")]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("synchronized")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//临界区")]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("h3",{attrs:{id:"_2-例子-用-synchronized-解决-count-1-问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-例子-用-synchronized-解决-count-1-问题"}},[s._v("#")]),s._v(" 2. 例子：用 synchronized 解决 count += 1 问题")]),s._v(" "),n("p",[s._v("为了保证"),n("code",[s._v("count += 1")]),s._v("语句的原子性，那么就要使实现这个操作的方法被"),n("code",[s._v("synchronized")]),s._v("修饰，如下：")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ClassRoom")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" count "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0L")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" count"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("synchronized")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("addOne")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\tcount "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("那么就能够保证同一时刻只有一个线程执行"),n("code",[s._v("addOne()")]),s._v("，保证了"),n("strong",[s._v("原子性")]),s._v("，并且通过"),n("code",[s._v("Happens-Before")]),s._v("规则的“管程中锁的规则”（对一个锁的解锁"),n("code",[s._v("Happens-Before")]),s._v("于后续对这个锁的加锁），所以解锁前做的操作对后续加锁是可见的，保证了"),n("strong",[s._v("可见性")]),s._v("，那么执行了多少次"),n("code",[s._v("addOne()")]),s._v("，count 就会增加多少\n但是，虽然保证了 count 的值不会有问题，但是 count 的值对"),n("code",[s._v("get()")]),s._v("是可见的吗？这是没法保证的。为了实现 count 的值对"),n("code",[s._v("get()")]),s._v("可见，那么可以在"),n("code",[s._v("get()")]),s._v("上也加上"),n("code",[s._v("synchronized")]),s._v("，这样"),n("code",[s._v("get()")]),s._v("和"),n("code",[s._v("addOne()")]),s._v("加的都是当前实例对象 this 的锁，是"),n("strong",[s._v("同一个锁")]),s._v("，那么就能保证可见性了。\n修改后的代码如下：")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ClassRoom")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" count "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0L")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("synchronized")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" count"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("synchronized")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("addOne")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\tcount "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("所以说，锁和被保护资源的关联关系应该是 1 : N，可以用一把锁保护多个资源，"),n("strong",[s._v("针对同一个资源应该加同一把锁")])])])}),[],!1,null,null,null);t.default=e.exports}}]);
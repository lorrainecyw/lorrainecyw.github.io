(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{779:function(v,_,o){"use strict";o.r(_);var e=o(11),t=Object(e.a)({},(function(){var v=this,_=v.$createElement,o=v._self._c||_;return o("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[o("h2",{attrs:{id:"事务简单介绍"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#事务简单介绍"}},[v._v("#")]),v._v(" 事务简单介绍")]),v._v(" "),o("p",[o("strong",[v._v("什么是事务？")]),v._v("\n事务是并发控制的单位，是用户定义的一个操作序列。事务保证一组数据库操作要么全部执行成功，要么全部执行失败。事务由引擎层来支持（MyISAM 不支持事务，InnoDB 支持事务）\n"),o("strong",[v._v("事务的特性：")])]),v._v(" "),o("ul",[o("li",[v._v("原子性（"),o("code",[v._v("Atomic")]),v._v("）：所有的操作要么全部执行成功，要么全部执行失败")]),v._v(" "),o("li",[v._v("一致性（"),o("code",[v._v("Consistency")]),v._v("）")]),v._v(" "),o("li",[v._v("隔离性（"),o("code",[v._v("Isolation")]),v._v("）")]),v._v(" "),o("li",[v._v("持久性（"),o("code",[v._v("Durability")]),v._v("）：事务进行的修改是永久的")])]),v._v(" "),o("h2",{attrs:{id:"事务隔离级别"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#事务隔离级别"}},[v._v("#")]),v._v(" 事务隔离级别")]),v._v(" "),o("p",[v._v("当事务同时执行时，就可能出现 "),o("strong",[v._v("脏读"),o("code",[v._v("dirty read")])]),v._v("、"),o("strong",[v._v("不可重复读"),o("code",[v._v("non-repeatable read")])]),v._v("、**幻读"),o("code",[v._v("phantom read")]),v._v("**等问题，为了解决这些问题，就有了“隔离级别”的概念\n隔离得越严实 -> 效率越低，所以需要根据业务寻找一个平衡点\n隔离级别总共有 4 种（MySQL 默认隔离级别为"),o("code",[v._v("RR")]),v._v("，Oracle 默认隔离级别为"),o("code",[v._v("RC")]),v._v("）：")]),v._v(" "),o("ol",[o("li",[o("strong",[v._v("未提交读（")]),o("code",[v._v("RU")]),o("strong",[v._v("，")]),o("code",[v._v("Read Uncommitted")]),o("strong",[v._v("）")]),v._v("：其他事务可以看到未提交事务所做的修改")]),v._v(" "),o("li",[o("strong",[v._v("提交读（")]),o("code",[v._v("RC")]),o("strong",[v._v("，")]),o("code",[v._v("Read Committed")]),o("strong",[v._v("）")]),v._v("：事务只能看到已提交事务所做的修改")]),v._v(" "),o("li",[o("strong",[v._v("可重复读（")]),o("code",[v._v("RR")]),o("strong",[v._v("，")]),o("code",[v._v("Repeatable Read")]),o("strong",[v._v("）")]),v._v("：一个事务执行过程中看到的数据总是和事务启动时看到的一致")]),v._v(" "),o("li",[o("strong",[v._v("可串行化（")]),o("code",[v._v("Serializable")]),o("strong",[v._v("）")]),v._v("：对于同一行记录，写需要加写锁，读需要加读锁。当发生读写锁冲突时，后访问的事务必须等前一事务执行完成，才能继续执行")])]),v._v(" "),o("p",[v._v("在实现上，数据库里面会创建一张 "),o("strong",[v._v("视图（"),o("code",[v._v("read-view")]),v._v("）")]),v._v("。在"),o("code",[v._v("RR")]),v._v("级别下，视图是在事务启动的时候就创建好的，在整个事务期间都使用同一张视图；在"),o("code",[v._v("RC")]),v._v("级别下，视图是在每个 SQL 语句开始执行的时候创建的\n通过设置"),o("code",[v._v("transaction-isolation")]),v._v("参数来修改隔离级别，并通过"),o("code",[v._v("show variables like 参数")]),v._v("命令来查看")]),v._v(" "),o("h2",{attrs:{id:"事务隔离的实现"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#事务隔离的实现"}},[v._v("#")]),v._v(" 事务隔离的实现")]),v._v(" "),o("blockquote",[o("p",[v._v("通过 undolog（回滚日志）实现")])]),v._v(" "),o("p",[v._v("实际上，MySQL 中每条记录更新的时候都会同时记录一条回滚操作到"),o("code",[v._v("undolog")]),v._v("中。每行记录都可以通过回滚操作，得到之前状态的值，也就是同一条记录在系统中存在多个版本，这就是"),o("code",[v._v("MVCC（多版本并发控制）")]),v._v("\n例如：某行记录的 c 字段从 1 被改成 2、3、4，那么回滚日志的记录如下：\n"),o("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/lorrainecyw/PhotoStorage@main/blogImage/1656836593207-db2a637b-d22d-4d39-be26-2b1f8ee66ca4.jpeg",alt:""}}),v._v("\n不同时刻启动的事务会有不同的视图（"),o("code",[v._v("read-view")]),v._v("），如果想要得到 c = 1 的视图"),o("code",[v._v("read-view A")]),v._v("，那么就需要经历三次回滚操作的执行\n**回滚日志会在什么时候删除？**自然是在没有比当前回滚日志更早的视图的时候（不需要的时候），就可以删除了。由此也可能，如果一直有比回滚日志更早的视图，那么当前回滚日志就不能删除，那么回滚日志积累得越来越多，会占用大量的存储空间。所以 "),o("strong",[v._v("尽量不要使用长事务")]),v._v("\n长事务的缺点：")]),v._v(" "),o("ol",[o("li",[v._v("因为长事务意味着系统里会存在很多很老的事务视图，老视图越多，回滚日志就越多，会占用大量存储空间")]),v._v(" "),o("li",[v._v("在MySQL 5.5 之前，undolog 和 数据字典一起放在 ibdata 文件中，所以即使长事务最终被提交，也只是 ibdata 文件里的回滚段被清理了，文件大小并不会发生改变，仍然占用空间")]),v._v(" "),o("li",[v._v("长事务还占用锁资源等，可能会拖垮整个库")])]),v._v(" "),o("h2",{attrs:{id:"事务启动方式"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#事务启动方式"}},[v._v("#")]),v._v(" 事务启动方式")]),v._v(" "),o("p",[v._v("事务启动方式有两种：")]),v._v(" "),o("ol",[o("li",[v._v("显式启动，使用"),o("code",[v._v("begin")]),v._v("或"),o("code",[v._v("start transaction")]),v._v("开启事务，使用"),o("code",[v._v("commit")]),v._v("提交事务，使用"),o("code",[v._v("rollback")]),v._v("回滚")]),v._v(" "),o("li",[o("code",[v._v("set autocommit = 0")]),v._v("，关闭当前线程自动提交。也就是执行语句之后，事务就开启了，但是并不会自动提交，直到执行了"),o("code",[v._v("commit")]),v._v("或者"),o("code",[v._v("rollback")]),v._v("，或者是断开连接，这就很容易导致长事务")])]),v._v(" "),o("p",[o("strong",[v._v("如何避免长事务？")])]),v._v(" "),o("ol",[o("li",[v._v("通过显式语句的方式启动事务或者"),o("code",[v._v("set autocommit = 1")]),v._v("，让事务能够自动提交")]),v._v(" "),o("li",[v._v("使用"),o("code",[v._v("commit work and chain")]),v._v("来提交事务并开启下一事务。由于执行"),o("code",[v._v("commit")]),v._v("提交上一个事务，然后在"),o("code",[v._v("begin")]),v._v("启动下一个事务总共要两次交互，所以使用"),o("code",[v._v("commit work and chain")]),v._v("可以减少交互次数，减少多一条语句的开销")])]),v._v(" "),o("p",[o("strong",[v._v("如何判断长事务")]),v._v("\n在"),o("code",[v._v("information_schema")]),v._v("库的"),o("code",[v._v("innodb_trx")]),v._v("表中查询长事务")])])}),[],!1,null,null,null);_.default=t.exports}}]);
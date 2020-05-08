#### react - hooks

### 策略模式, 构造函数模式

1.useState 方法

- 挂载阶段
  - scheduleUpdateOnFiber -> ensureRootIsScheduled -> performSyncWorkOnRoot -> workLoopSync -> performUnitOfWork -> beginworks -> mountIndeterminateComponent -> renderWithHooks -> Component()[fiberNode.types]
  - 初始化：调用了 HooksDispatcherOnMountInDEV.useState 方法 1.在挂载阶段时，调用的 useState 方法里调用**mountState**,这是一个公共方法，它在其他类也会用到。初始化，返回`initialState`值和`dispatch`分发方法，便于分发`action`值,将`initialState`值存放在了全局`workInProgressHook`的单向链表（`指针就是next`）的`baseState`,`memoizedState`和 `lastRenderedState`。

  - 更新：调用了 HooksDispatcherOnUpdateInDEV.useState 方法，通过 updateState 调用驱动`updateWorkInProgressHook`为`workInProgressHook`创建一个新的节点的`baseState`和`memoizedState`里
  - render：然后通过`renderWithHooks`方法遍历`workInProgress`链表,比对值的差异，进行更新数据。

  ```mermaid
    graph LR
    a[useState初始化]--通过mountState设置链表的初始值并返回memoizedState值-->renderWithHooks
    setState-->c(render)
  ```

 <!-- 2.useEffect 方法
  3.useRef 方法
  4.useMome 方法 -->

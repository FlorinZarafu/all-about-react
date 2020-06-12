import React from "react";
import PropsContainer from "./components/1-props/props-container.component";
import StateContainer from "./components/2-state/state-container.component";
import Counter from "./components/3-setState/counter.component";
import EventHandler from "./components/4-event-handlers/event-handler.component";
import Click from "./components/4-event-handlers/class-click.component";
import EventBinding from "./components/5-event-binding/event-binding.component";
import ParentComponent from "./components/6-method-as-props/parent.component";
import UserGreeting from "./components/7-conditional-rendering/if-else/user-greeting.component";
import UserGreeting2 from "./components/7-conditional-rendering/elements-variables/elements-variable.component";
import UserGreeting3 from "./components/7-conditional-rendering/ternery-condition/ternery-condition.component";
import NameList from "./components/8-list-rendering/name-list.component";
import PersonList from "./components/8-list-rendering/person-list.component";
import Form from "./components/9-form/form.component";
import Mounting from "./components/10-lifecycle/mounting/mounting.component";
import UnMounting from "./components/10-lifecycle/unmounting/unmounting.component";
import FragmentDemo from "./components/11-fragments/fragment.component";
import Table from "./components/11-fragments/table.component";
import PureComp from "./components/12-pure-components/pure-component";
import ParentComponent1 from "./components/12-pure-components/parent-component.component";
import MemoComp from "./components/13-memo/memo.component";
import ParComp from "./components/13-memo/par-comp.component";
import RefsDemo from "./components/14-refs/refs-demo.component";
import ForwardRefParent from "./components/14-refs/parent-forward-ref.component";
import PortalDemo from "./components/15-portals/portals.component";
import Parent4 from "./components/16-error-boundary/parent4.component";
import ClickCounter from "./components/17-higher-order-components/click-counter.component";
import HoverCounter from "./components/17-higher-order-components/hover-counter.component";
import ClickCounter2 from "./components/18-render-props/click-counter-2.component";
import HoverCounter2 from "./components/18-render-props/hover-counter-2.component";
import User from "./components/18-render-props/user.component";
import Get from "./components/19-http/get.component";
import PostForm from "./components/19-http/post.component";

const App = () => {
  return (
    <div className="App">
      {/* <PropsContainer /> */}
      {/* <StateContainer /> */}
      {/* <Counter /> */}
      {/* <EventHandler /> */}
      {/* <Click /> */}
      {/* <EventBinding /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <UserGreeting2 /> */}
      {/* <UserGreeting3 /> */}
      {/* <NameList /> */}
      {/* <PersonList /> */}
      {/* <Form /> */}
      {/* <Mounting /> */}
      {/* <UnMounting /> */}
      {/* <FragmentDemo /> */}
      {/* <Table /> */}
      {/* <ParentComponent1 /> */}
      {/* <ParComp /> */}
      {/* <RefsDemo /> */}
      {/* <ForwardRefParent /> */}
      {/* <PortalDemo /> */}
      {/* <Parent4 /> */}
      {/* <HoverCounter />
      <ClickCounter /> */}
      {/* <ClickCounter2 />
      <HoverCounter2 />
      <User render={(isLoggedIn) => (isLoggedIn ? "Florin" : "Guest")} /> */}
      {/* <Counter
        render={(count, incrementCount) => (
          <ClickCounter2 count={count} incrementCount={incrementCount} />
        )}
      /> */}
      {/* <Counter
        render={(count, incrementCount) => (
          <HoverCounter2 count={count} incrementCount={incrementCount} />
        )}
      /> */}
      {/* <Get /> */}
      <PostForm />
    </div>
  );
};

export default App;

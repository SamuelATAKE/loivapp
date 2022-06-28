import React from "react";
import { TabContent, TabPane } from "reactstrap";

// hooks
import { useRedux } from "../../hooks/index";

// constants
import { TABS } from "../../constants/index";

// component
import Profile from "../Dashboard/Profile/index";
import Chats from "../Dashboard/Chats/index";
import Bookmark from "../Dashboard/Bookmark/index";
import Settings from "../Dashboard/Settings/index";

interface LeftbarProps {}
const Leftbar = (props: LeftbarProps) => {
  // global store
  const { useAppSelector } = useRedux();

  const { activeTab } = useAppSelector(state => ({
    activeTab: state.Layout.activeTab,
  }));

  return (
    <>
      {/* start chat-leftsidebar */}
      <div className="chat-leftsidebar">
        <TabContent activeTab={activeTab}>
          {/* Start Profile tab-pane */}
          <TabPane
            tabId={TABS.USERS}
            role="tabpanel"
            aria-labelledby="pills-user-tab"
          >
            <Profile />
          </TabPane>

          <TabPane
            tabId={TABS.CHAT}
            role="tabpanel"
            aria-labelledby="pills-chat-tab"
          >
            <Chats />
          </TabPane>

          <TabPane
            tabId={TABS.BOOKMARK}
            role="tabpanel"
            aria-labelledby="pills-bookmark-tab"
          >
            <Bookmark />
          </TabPane>

          <TabPane
            tabId={TABS.SETTINGS}
            role="tabpanel"
            aria-labelledby="pills-setting-tab"
          >
            <Settings />
          </TabPane>
        </TabContent>
      </div>
    </>
  );
};

export default Leftbar;

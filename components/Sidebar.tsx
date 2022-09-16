import React from 'react'
import {
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    EnvelopeIcon,
    QueueListIcon,
    UserIcon,
    HomeIcon
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import SidebarRow from './SidebarRow';

function Sidebar() {
  return (
    <div>
      <Image
        src="/images/twitter.png"
        width={40}
        height={40}
        alt="twitter"
      />
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={BellIcon} title="Notifications" />
      <SidebarRow Icon={EnvelopeIcon} title="Messages" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SidebarRow Icon={QueueListIcon} title="Lists" />
    </div>
  )
}

export default Sidebar
import React, { SVGProps } from 'react'

interface Props {
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    title: string
}

function SidebarRow({ Icon, title }: Props) {
  return (
    <div>
        <Icon className="h-6 w-6" />
        <p>{ title }</p>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" ><defs /><path d="M45.131 15.655A16.685 16.685 0 0 0 48.051 1.9a.5.5 0 0 0-.883-.2 23.368 23.368 0 0 1-11.151 7.775zm-40.337 0A16.69 16.69 0 0 1 1.873 1.9a.5.5 0 0 1 .884-.2 23.363 23.363 0 0 0 11.151 7.775z" fill="#9f5ae5" stroke="#45413c" strokeWidth="1.25px" strokeLinecap="round" strokeLinejoin="round" /><ellipse cx={25.038} cy={26.993} rx={23.5} ry={21.5} fill="#bf8df2" /><path d="M25.038 44.49c-13.3 0-22.407-8.564-23.4-19.5-.06.659-.1 1.325-.1 2 0 11.874 9.4 21.5 23.5 21.5s23.5-9.626 23.5-21.5c0-.676-.04-1.342-.1-2-.994 10.936-10.103 19.5-23.4 19.5z" fill="#9f5ae5" /><ellipse cx={25.038} cy={7.995} rx={6.5} ry={1.001} fill="#dabff5" /><path d="M28.962 17.257c1-2 4-3.5 6-3.5m-14 3.5c-1-2-4-3.5-6-3.5m.881 12.881a11.052 11.052 0 0 0 9.281 4.874c5.683.134 7.645-2.662 9.108-4.089" fill="none" stroke="#45413c" strokeWidth="1.25px" strokeLinecap="round" strokeLinejoin="round" /><circle cx={32.037} cy={20.147} r={1.75} fill="#45413c" /><circle cx={18.041} cy={19.841} r={1.75} fill="#45413c" /><ellipse cx={25.038} cy={26.993} rx={23.5} ry={21.5} strokeMiterlimit={10} fill="none" stroke="#45413c" strokeWidth="1.25px" /></svg> */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><defs></defs><path d="M45.131 15.655A16.685 16.685 0 0 0 48.051 1.9a.5.5 0 0 0-.883-.2 23.368 23.368 0 0 1-11.151 7.775zm-40.337 0A16.69 16.69 0 0 1 1.873 1.9a.5.5 0 0 1 .884-.2 23.363 23.363 0 0 0 11.151 7.775z" fill="#9f5ae5" stroke="#45413c" stroke-width="1.25px" stroke-linecap="round" stroke-linejoin="round"></path><ellipse cx="25.038" cy="26.993" rx="23.5" ry="21.5" fill="#bf8df2"></ellipse><path d="M25.038 44.49c-13.3 0-22.407-8.564-23.4-19.5-.06.659-.1 1.325-.1 2 0 11.874 9.4 21.5 23.5 21.5s23.5-9.626 23.5-21.5c0-.676-.04-1.342-.1-2-.994 10.936-10.103 19.5-23.4 19.5z" fill="#9f5ae5"></path><ellipse cx="25.038" cy="7.995" rx="6.5" ry="1.001" fill="#dabff5"></ellipse><path d="M28.962 17.257c1-2 4-3.5 6-3.5m-14 3.5c-1-2-4-3.5-6-3.5m.881 12.881a11.052 11.052 0 0 0 9.281 4.874c5.683.134 7.645-2.662 9.108-4.089" fill="none" stroke="#45413c" stroke-width="1.25px" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="32.037" cy="20.147" r="1.75" fill="#45413c"></circle><circle cx="18.041" cy="19.841" r="1.75" fill="#45413c"></circle><ellipse cx="25.038" cy="26.993" rx="23.5" ry="21.5" stroke-miterlimit="10" fill="none" stroke="#45413c" stroke-width="1.25px"></ellipse></svg>
    </div>
  )
}

export default SidebarRow
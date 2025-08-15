"use client"

import { useState } from "react"
import { Home, Search, Compass, Film, MessageCircle, Heart, PlusSquare, User, Menu, Grid3X3 } from "lucide-react"
import { cn } from "@/lib/utils"
import BGHangoutLogo from "../Logo/BGHangoutLogo"

const navigationItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Search, label: "Search", href: "/search" },
  { icon: Compass, label: "Explore", href: "/explore" },
  { icon: Film, label: "Reels", href: "/reels" },
  { icon: MessageCircle, label: "Messages", href: "/messages" },
  { icon: Heart, label: "Notifications", href: "/notifications" },
  { icon: PlusSquare, label: "Create", href: "/create" },
  { icon: User, label: "Profile", href: "/profile" },
]

const bottomItems = [
  { icon: Menu, label: "More", href: "/more" },
  { icon: Grid3X3, label: "Also from Meta", href: "/meta" },
]

export default function InstagramNavbar() {
  const [activeItem, setActiveItem] = useState("Home")

  const NavItem = ({
    icon: Icon,
    label,
    href,
    isActive = false,
  }: {
    icon: any
    label: string
    href: string
    isActive?: boolean
  }) => (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault()
        setActiveItem(label)
      }}
      className={cn(
        "flex items-center gap-4 p-3 rounded-lg transition-colors hover:bg-gray-200/50 xl:justify-start md:justify-center",
        isActive && "font-semibold",
      )}
    >
      <Icon size={24} className="flex-shrink-0" />
      <span className="text-base xl:inline md:hidden">{label}</span>
    </a>
  )

  return (
    <>
      {/* Desktop & Tablet Sidebar (hidden on mobile) */}
      <nav className="hidden md:flex fixed left-0 top-0 h-full bg-white border-r border-gray-800 z-50 flex-col justify-between xl:w-64 md:w-20">
        <div className="p-6">
          {/* Logo */}
          <div className="mb-8">
            <BGHangoutLogo className="w-48 h-auto" />
            <h1 className="xl:block md:hidden text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              BGHangout
            </h1>
            <div className="xl:hidden md:block w-8 h-8 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">IG</span>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="space-y-2">
            {navigationItems.map((item) => (
              <NavItem
                key={item.label}
                icon={item.icon}
                label={item.label}
                href={item.href}
                isActive={activeItem === item.label}
              />
            ))}
          </div>
        </div>

        {/* Bottom Items */}
        <div className="p-6 space-y-2">
          {bottomItems.map((item) => (
            <NavItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              href={item.href}
              isActive={activeItem === item.label}
            />
          ))}
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 z-50">
        <div className="flex items-center justify-around py-2">
          {navigationItems.slice(0, 5).map((item) => (
            <button
              key={item.label}
              onClick={() => setActiveItem(item.label)}
              className={cn(
                "flex flex-col items-center gap-1 p-2 transition-colors",
                activeItem === item.label ? "text-white" : "text-gray-400",
              )}
            >
              <item.icon size={24} />
            </button>
          ))}
        </div>
      </nav>
    </>
  )
}

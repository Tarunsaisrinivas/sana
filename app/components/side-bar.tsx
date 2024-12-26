'use client'

import { usePathname, useRouter } from 'next/navigation'
import { Search, MessageSquare, ClipboardList, FileSpreadsheet, Link2, Files, FolderClosed, Settings, X, ChevronDown, Calendar, Share2, Plus } from 'lucide-react'
import { cn } from "@/lib/utils"
import { useState } from 'react'
import { MeetingsModal } from './meetings-model'


export function Sidebar() {
  const router = useRouter()
  const pathname = usePathname()
  const [isContentOpen, setIsContentOpen] = useState(false)
    const [showMeetingsModal, setShowMeetingsModal] = useState(false)
    const [isCollectionsOpen, setIsCollectionsOpen] = useState(false)

    const contentItems = [
      { name: 'Meetings', icon: Calendar, onClick: () => setShowMeetingsModal(true) },
      { name: 'Files', icon: Files, href: '/files' },
      { name: 'Shared with me', icon: Share2, href: '/shared' },
    ]
    const collectionItems = [
      { name: 'Demo collection', href: '/collections/demo' },
      { name: 'Add collection', icon: Plus, href: '/collections/new' },
    ]
  return (
    <>
    <div className="w-60 h-screen bg-zinc-900 border-r border-zinc-800 flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-zinc-800">
        <span className="text-white">Development</span>
        <button className="p-1 hover:bg-zinc-800 rounded">
          <MessageSquare className="h-5 w-5 text-zinc-400" />
        </button>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 py-2">
        <button 
          onClick={() => router.push('/')}
          className={cn(
            "flex w-full items-center gap-3 px-4 py-2",
            "text-zinc-400 hover:bg-zinc-800",
            pathname === '/' && "bg-zinc-800"
          )}
        >
          <MessageSquare size={20} />
          <span>Start</span>
        </button>

        <button 
          onClick={() => router.push('/search')}
          className={cn(
            "flex w-full items-center gap-3 px-4 py-2",
            "text-zinc-400 hover:bg-zinc-800",
            pathname === '/search' && "bg-zinc-800"
          )}
        >
          <Search size={20} />
          <span>Search</span>
        </button>

        <button 
          onClick={() => router.push('/assistants')}
          className={cn(
            "flex w-full items-center gap-3 px-4 py-2",
            "text-zinc-400 hover:bg-zinc-800",
            pathname === '/assistants' && "bg-zinc-800"
          )}
        >
          <MessageSquare size={20} />
          <span>Assistants</span>
        </button>

        <button 
          onClick={() => router.push('/tasks')}
          className={cn(
            "flex w-full items-center gap-3 px-4 py-2",
            "text-zinc-400 hover:bg-zinc-800",
            pathname === '/tasks' && "bg-zinc-800"
          )}
        >
          <ClipboardList size={20} />
          <span>Tasks</span>
        </button>

        <button 
          onClick={() => router.push('/sheets')}
          className={cn(
            "flex w-full items-center gap-3 px-4 py-2 group",
            "text-zinc-400 hover:bg-zinc-800",
            pathname === '/sheets' && "bg-zinc-800"
          )}
        >
          <FileSpreadsheet size={20} />
          <span>Sheets</span>
          <span className="ml-auto text-xs bg-blue-500 px-1.5 py-0.5 rounded text-white group-hover:bg-blue-600">
            Beta
          </span>
        </button>

        <button 
          onClick={() => router.push('/integrations')}
          className={cn(
            "flex w-full items-center gap-3 px-4 py-2",
            "text-zinc-400 hover:bg-zinc-800",
            pathname === '/integrations' && "bg-zinc-800"
          )}
        >
          <Link2 size={20} />
          <span>Integrations</span>
        </button>

        <div className="relative">
            <button 
              onClick={() => setIsContentOpen(!isContentOpen)}
              className={cn(
                "flex w-full items-center justify-between px-4 py-2",
                "text-zinc-400 hover:bg-zinc-800",
                isContentOpen && "bg-zinc-800"
              )}
            >
              <div className="flex items-center gap-3">
                <Files size={20} />
                <span>Your content</span>
              </div>
              <ChevronDown 
                size={16} 
                className={cn(
                  "transition-transform",
                  isContentOpen && "transform rotate-180"
                )}
              />
            </button>
            
            {isContentOpen && (
              <div className="py-1">
                {contentItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={item.onClick || (() => item.href && router.push(item.href))}
                    className="flex w-full items-center gap-3 px-8 py-2 text-zinc-400 hover:bg-zinc-800"
                  >
                    <item.icon size={20} />
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <div>
          <button 
            onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
            className={cn(
              "flex w-full items-center justify-between px-4 py-2",
              "text-zinc-400 hover:bg-zinc-800",
              isCollectionsOpen && "bg-zinc-800"
            )}
          >
            <div className="flex items-center gap-3">
              <FolderClosed size={20} />
              <span>Your collections</span>
            </div>
            <ChevronDown 
              size={16} 
              className={cn(
                "transition-transform",
                isCollectionsOpen && "transform rotate-180"
              )}
            />
          </button>
            
          {isCollectionsOpen && (
            <div className="bg-zinc-800/50">
              {collectionItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => router.push(item.href)}
                  className={cn(
                    "flex w-full items-center gap-3 px-8 py-2",
                    "text-zinc-400 hover:bg-zinc-700/50",
                    pathname === item.href && "bg-zinc-700/50"
                  )}
                >
                  {item.icon && <item.icon size={20} />}
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Updates Card */}
      <div className="mx-4 mb-4 bg-zinc-800/50 rounded-lg p-4 relative">
        <button className="absolute right-2 top-2 p-1 hover:bg-zinc-700 rounded">
          <X className="h-4 w-4 text-zinc-400" />
        </button>
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-zinc-700 rounded" />
          <div>
            <h3 className="text-white text-sm font-medium mb-1">We've made some updates</h3>
            <p className="text-zinc-400 text-sm">See what's new</p>
          </div>
        </div>
      </div>

      {/* Credits Counter */}
      <div className="mx-4 mb-4 bg-zinc-800/50 rounded-lg p-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-white text-sm">100 credits left today</span>
          <div className="h-4 w-4 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500" />
        </div>
        <p className="text-zinc-400 text-sm">Invite peers to refill</p>
      </div>

      {/* Settings */}
      <button className="flex items-center gap-3 px-4 py-2 text-zinc-400 hover:bg-zinc-800">
        <Settings size={20} />
        <span>Settings</span>
      </button>
    </div>
     <MeetingsModal
            isOpen={showMeetingsModal} 
            onClose={() => setShowMeetingsModal(false)} 
          />
          </>
  )
}


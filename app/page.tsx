"use client"
import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Sidebar } from './components/side-bar'
import { Header } from './components/Header'
import { DocumentCard } from './components/document-card'
import { InputBar } from './components/Input-bar'

export default function Home() {
  return (
   
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1 p-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <DocumentCard
                title="Summarize this document" 
                subtitle="Demo file"
                imageSrc="/placeholder.svg?height=40&width=40"
              />
              <DocumentCard 
                title="Summarize this document" 
                subtitle="Demo file"
                imageSrc="/placeholder.svg?height=40&width=40"
              />
            </div>
            
            <div>
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <Input
                    placeholder="Search all knowledge"
                    className="bg-zinc-900 border-zinc-800 text-zinc-400"
                  />
                  <Search className="w-5 h-5 text-zinc-500" />
                </div>
                <span className="text-zinc-500">Recent</span>
              </div>
              
              <div className="space-y-4">
                <div className="bg-zinc-900 p-3 rounded-lg">
                  <span className="text-zinc-400">Conduct a competitor...</span>
                </div>
                <div className="bg-zinc-900 p-3 rounded-lg">
                  <span className="text-zinc-400">Craft a LinkedIn connection...</span>
                </div>
                <div className="bg-zinc-900 p-3 rounded-lg">
                  <span className="text-zinc-400">Provide feedback on...</span>
                </div>
                <button className="text-zinc-500 text-sm">View all</button>
              </div>
            </div>
          </div>
        </main>
        
        <InputBar />
      
    </div>
  )
}


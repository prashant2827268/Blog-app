import React, { useState } from "react";

export default function BlogEditorPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* ✍️ Blog Editor */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-5">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Create New Blog
            </h1>
            <p className="text-gray-500">
              Write and preview your blog post before publishing.
            </p>
          </div>

          <input
            type="text"
            placeholder="Enter blog title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full text-xl font-semibold p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <textarea
            placeholder="Write your blog content here..."
            rows={12}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-3 text-gray-700 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <div className="flex justify-end">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2 rounded-xl transition">
              Publish Blog
            </button>
          </div>
        </div>

        {/* 👁️ Live Preview */}
        <div className="bg-white rounded-2xl shadow-lg p-6 overflow-auto">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Live Preview</h2>

          <h3 className="text-2xl font-bold text-indigo-700">
            {title || "Your Blog Title Will Appear Here"}
          </h3>

          <div className="mt-4 text-gray-700 whitespace-pre-line leading-relaxed">
            {content ||
              "Start typing your content to see a live preview here..."}
          </div>
        </div>
      </div>
    </div>
  );
}

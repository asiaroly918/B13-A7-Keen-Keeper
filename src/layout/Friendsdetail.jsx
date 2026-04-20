import React, { useState, useEffect } from 'react';
import { useParams, Link, useLoaderData } from 'react-router-dom';


const FriendDetail = () => {
   
    const friendsData = useLoaderData();
    console.log('Loading friend details...', friendsData);
    const { id } = useParams();
    const [friend] = useState(friendsData.find(f => f.id === parseInt(id)));
    const [timeline, setTimeline] = useState([]);
    const [toast, setToast] = useState(null);

    if (!friend) return <div className="p-10">Friend not found</div>;

    const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
};

    const handleCheckIn = (type) => {
        const newEntry = {
            id: Date.now(),
            type,
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            title: `${type} with ${friend.name}`
        };
        setTimeline([newEntry, ...timeline]);
        showToast(`Logged ${type.toLowerCase()} with ${friend.name}`);
    };

    return (
    <div className="max-w-6xl mx-auto px-4 py-10 relative">
        <Link to="/" className="text-emerald-700 font-semibold mb-6 inline-block flex items-center gap-2">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        Back to Friends
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN */}
        <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <img src={friend.picture} className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-emerald-50" />
            <h1 className="text-2xl font-bold text-slate-800">{friend.name}</h1>
            
            <div className="mt-4 flex flex-col items-center gap-3 w-full">
                <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-white ${friend.status === 'overdue' ? 'bg-red-500' : 'bg-[#284a3c]'}`}>
                {friend.status}
                </span>
                <div className="flex gap-2">
                {friend.tags.map(t => <span key={t} className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded uppercase">{t}</span>)}
                </div>
                    <p className="text-gray-500 text-sm mt-4 leading-relaxed">{friend.bio}</p>
                    <p className="text-emerald-700 text-sm font-medium mt-2">{friend.email}</p>
                </div>

            <div className="mt-8 w-full space-y-3">
                <button className="w-full py-3 rounded-lg border border-gray-200 text-gray-600 font-bold text-sm hover:bg-gray-50 transition">⏰ Snooze 2 Weeks</button>
                <button className="w-full py-3 rounded-lg border border-gray-200 text-gray-600 font-bold text-sm hover:bg-gray-50 transition">📦 Archive</button>
                <button className="w-full py-3 rounded-lg border border-red-100 text-red-500 font-bold text-sm hover:bg-red-50 transition">🗑️ Delete</button>
            </div>
        </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-8 space-y-6">
          {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Days Since</p>
                <p className="text-3xl font-bold text-slate-800">{friend.days_since_contact}</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Goal</p>
                <p className="text-3xl font-bold text-slate-800">{friend.goal}d</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Next Due</p>
                <p className="text-lg font-bold text-slate-800 mt-2">{friend.next_due_date}</p>
            </div>
        </div>

          {/* Goal Card */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex justify-between items-center">
            <div>
                <h3 className="text-sm font-bold text-slate-800">Relationship Goal</h3>
                <p className="text-gray-500 text-sm">Reach out every {friend.goal} days</p>
            </div>
            <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-bold text-gray-600 hover:bg-gray-50">Edit</button>
        </div>

          {/* Quick Check-In */}
            <div className="bg-[#284a3c] p-8 rounded-xl text-white shadow-lg">
            <h3 className="text-xl font-bold mb-6">Quick Check-In</h3>
            <div className="flex gap-4">
                <CheckInBtn icon="phone" label="Call" onClick={() => handleCheckIn('Call')} />
                <CheckInBtn icon="text" label="Text" onClick={() => handleCheckIn('Text')} />
                <CheckInBtn icon="video" label="Video" onClick={() => handleCheckIn('Video')} />
            </div>
        </div>

          {/* Timeline Section */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Timeline</h3>
            <div className="space-y-6">
                {timeline.length === 0 ? (
                <p className="text-gray-400 italic text-sm">No recent interactions logged.</p>
                ) : (
                timeline.map(item => (
                    <div key={item.id} className="flex gap-4 items-start">
                    <div className="bg-emerald-50 p-2 rounded-full text-emerald-700">
                        <InteractionIcon type={item.type} />
                    </div>
                    <div>
                        <p className="font-bold text-slate-800">{item.title}</p>
                        <p className="text-xs text-gray-400">{item.date}</p>
                    </div>
                    </div>
                ))
            )}
            </div>
            </div>
        </div>
    </div>

      {/* Toast Notification */}
        {toast && (
        <div className="fixed bottom-8 right-8 bg-slate-900 text-white px-6 py-3 rounded-lg shadow-2xl animate-bounce flex items-center gap-3">
            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
            {toast}
        </div>
    )}
    </div>
    );
};

// Helper Components for SVGs
const CheckInBtn = ({ label, onClick, icon }) => (
    <button onClick={onClick} className="flex-1 flex flex-col items-center gap-2 bg-white/10 hover:bg-white/20 p-4 rounded-xl transition">
    <InteractionIcon type={label} />
    <span className="font-bold text-sm">{label}</span>
    </button>
);

const InteractionIcon = ({ type }) => {
    if (type === 'Call') return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
    if (type === 'Text') return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>;
    return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 7l-7 5 7 5V7z"></path><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>;
};

export default FriendDetail;
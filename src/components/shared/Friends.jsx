import { use } from "react";
import { Link } from "react-router";

const StatusBadge = ({ status }) => {
    const styles = {
        'overdue': 'bg-red-500 text-white',
        'almost due': 'bg-amber-500 text-white',
        'on-track': 'bg-[#284a3c] text-white',
    };
    return (
    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${styles[status.toLowerCase()] || 'bg-gray-200'}`}>
    {status}
    </span>
    );
};
const Friends = ({ friendsResponse }) => {
    const friends=use(friendsResponse);
    return(
        <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {friends.map((friend) => (
                        <Link 
                            key={friend.id}
                            to={`/friend/${friend.id}`}
                            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center cursor-pointer hover:shadow-md transition-shadow"
                        >
                            <img 
                            src={friend.picture} 
                            alt={friend.name} 
                            className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-white shadow-sm"
                            />
                            <h3 className="text-lg font-bold text-slate-800 mb-1">{friend.name}</h3>
                            <p className="text-xs text-gray-400 mb-3">{friend.days_since_contact}d ago</p>
                            
                            <div className="flex gap-1 mb-4 flex-wrap justify-center">
                            {friend.tags.map(tag => (
                                <span key={tag} className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                                {tag}
                                </span>
                            ))}
                            </div>
                            
                            <StatusBadge status={friend.status} />
                        </Link>
                    ))}
                    </div>
        </div>
    )
}

export default Friends;
const user = {
  name: 'Thomas Fletcher',
  location: 'Sydney, Australia',
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  weight: 75,
  height: 6.5,
  age: 25,
};

const goals = [
  {
    icon: '🏃‍♂️',
    label: 'Running',
    value: '70km/80km',
    percent: 79,
    color: '#3b82f6',
  },
  {
    icon: '😴',
    label: 'Sleeping',
    value: '50hrs/60hrs',
    percent: 60,
    color: '#f97316',
  },
  {
    icon: '🔥',
    label: 'Weight Loss',
    value: '70kg/100kg',
    percent: 60,
    color: '#6366f1',
  },
];

const scheduled = [
  {
    icon: '🧘‍♂️',
    title: 'Training - Yoga Class',
    type: 'Fitness',
    date: '22 Mar',
  },
  {
    icon: '🏊‍♂️',
    title: 'Training - Swimming',
    type: 'Fitness',
    date: '22 Mar',
  },
];

const ProgressCircle = ({ percent, color }) => (
  <div style={{
    width: 48,
    height: 48,
    borderRadius: '50%',
    border: `4px solid ${color}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    color: color,
    fontSize: 16,
    background: '#fff',
  }}>
    {percent}%
  </div>
);

const UserProfilePanel = () => (
  <div style={{ width: 250, padding: '2rem 0', margin: '0 auto' }}>
    {/* User Profile */}
    <div style={{ background: '#fff', borderRadius: 16, padding: 24, boxShadow: '0 2px 8px #0001', textAlign: 'center', marginBottom: 24 }}>
      <img src={user.avatar} alt={user.name} style={{ width: 64, height: 64, borderRadius: '50%', marginBottom: 8 }} />
      <div style={{ fontWeight: 'bold', fontSize: 18 }}>{user.name}</div>
      <div style={{ color: '#888', fontSize: 14 }}>{user.location}</div>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 16 }}>
        <div>
          <div style={{ fontWeight: 'bold', fontSize: 18 }}>{user.weight}kg</div>
          <div style={{ color: '#888', fontSize: 12 }}>Weight</div>
        </div>
        <div>
          <div style={{ fontWeight: 'bold', fontSize: 18 }}>{user.height}</div>
          <div style={{ color: '#888', fontSize: 12 }}>Height</div>
        </div>
        <div>
          <div style={{ fontWeight: 'bold', fontSize: 18 }}>{user.age}yrs</div>
          <div style={{ color: '#888', fontSize: 12 }}>Age</div>
        </div>
      </div>
    </div>

    {/* Goals */}
    <div style={{ marginBottom: 24 }}>
      <div style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 12 }}>Your Goals</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {goals.map(goal => (
          <div key={goal.label} style={{ background: '#fff', borderRadius: 12, padding: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 1px 4px #0001' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: 28 }}>{goal.icon}</span>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: 15 }}>{goal.label}</div>
                <div style={{ color: '#888', fontSize: 13 }}>{goal.value}</div>
              </div>
            </div>
            <ProgressCircle percent={goal.percent} color={goal.color} />
          </div>
        ))}
      </div>
    </div>

    {/* Monthly Progress */}
    <div style={{ background: '#fff', borderRadius: 12, padding: 20, marginBottom: 24, textAlign: 'center', boxShadow: '0 1px 4px #0001' }}>
      <div style={{ fontWeight: 'bold', fontSize: 15, marginBottom: 8 }}>Monthly Progress</div>
      <div style={{ margin: '0 auto', width: 80, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          width: 80,
          height: 80,
          borderRadius: '50%',
          border: '6px solid #f97316',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          color: '#f97316',
          fontSize: 22,
          background: '#fff',
        }}>
          80%
        </div>
      </div>
      <div style={{ color: '#888', fontSize: 13, marginTop: 8 }}>
        You have achieved <span style={{ color: '#f97316', fontWeight: 'bold' }}>80%</span> of your goal this month
      </div>
    </div>

    {/* Scheduled */}
    <div>
      <div style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 12 }}>Scheduled</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {scheduled.map(item => (
          <div key={item.title} style={{ background: '#fff', borderRadius: 10, padding: 14, display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 1px 4px #0001' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 28 }}>{item.icon}</span>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: 14 }}>{item.title}</div>
                <div style={{ color: '#888', fontSize: 12 }}>{item.type}</div>
              </div>
            </div>
            <div style={{ color: '#888', fontSize: 13 }}>{item.date}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default UserProfilePanel; 
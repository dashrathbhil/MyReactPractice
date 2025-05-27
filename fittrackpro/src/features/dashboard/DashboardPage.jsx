import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend
} from 'recharts';

import StepsChart from '../../components/charts/StepsChart';
import WaterChart from '../../components/charts/WaterChart';
import CaloriesChart from '../../components/charts/CaloriesChart';
import HeartRateChart from '../../components/charts/HeartRateChart';

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

const statWidgets = [
  {
    label: 'Steps',
    value: '2,500',
    unit: 'Steps',
    sub: '50% of your goals',
    color: '#20c997',
    icon: '🚶',
  },
  {
    label: 'Water',
    value: '1.25',
    unit: 'Liters',
    sub: '',
    color: '#fb923c',
    icon: '💧',
  },
  {
    label: 'Calories',
    value: '',
    unit: '',
    sub: 'Today\nUnder',
    color: '#f43f5e',
    icon: '🔥',
  },
  {
    label: 'Heart Rate',
    value: '110',
    unit: 'Bpm',
    sub: '',
    color: '#818cf8',
    icon: '💓',
  },
];

const activityData = [
  { day: 'Mon', value: 8 },
  { day: 'Tue', value: 12 },
  { day: 'Wed', value: 14 },
  { day: 'Thu', value: 16 },
  { day: 'Fri', value: 20 },
  { day: 'Sat', value: 13 },
  { day: 'Sun', value: 9 },
];

const progressData = [
  { name: 'Cardio', value: 30, color: '#20c997' },
  { name: 'Stretching', value: 40, color: '#fb923c' },
  { name: 'Treadmill', value: 30, color: '#f43f5e' },
  { name: 'Strength', value: 20, color: '#818cf8' },
];

const trainers = [
  {
    name: 'Cameron Williamson',
    title: 'Fitness Specialist',
    img: 'https://randomuser.me/api/portraits/men/45.jpg',
    stars: 25,
    likes: 104,
    headerImg: 'https://images.unsplash.com/photo-1534368959876-552f30e228f7?auto=format&fit=crop&w=256&q=80',
  },
  {
    name: 'Cameron Williamson',
    title: 'Fitness Specialist',
    img: 'https://randomuser.me/api/portraits/men/46.jpg',
    stars: 25,
    likes: 104,
    headerImg: 'https://images.unsplash.com/photo-1571019613454-f02b93f87cd8?auto=format&fit=crop&w=256&q=80',
  },
];

const dietMenu = [
  {
    meal: 'Breakfast',
    time: '10:00 am',
    headerImg: 'https://images.unsplash.com/photo-1493770348161-36956037f214?auto=format&fit=crop&w=256&q=80',
    items: [
      {
        name: 'Avocado salad',
        carbs: 8,
        protein: 16,
        fat: 6,
        img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=facearea&w=64&h=64',
      },
      {
        name: 'Blueberry',
        carbs: 8,
        protein: 16,
        fat: 6,
        img: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=facearea&w=64&h=64',
      },
    ],
  },
];

const DashboardPage = () => (
  <div className="container-fluid py-3">
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24, flexWrap: 'wrap', gap: '1rem' }}>
      <div>
        <div style={{ color: '#888', fontSize: 16 }}>Good Morning</div>
        <div style={{ fontWeight: 'bold', fontSize: 28 }}>Welcome Back <span role="img" aria-label="party">🎉</span></div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <button className="btn btn-warning">Subscribe</button>
        <span style={{ fontSize: 22, color: '#888' }}>🔔</span>
        <span style={{ fontSize: 22, color: '#888' }}>＋</span>
      </div>
    </div>

    <div className="row g-4 mb-4">
      {statWidgets.map((w, i) => (
        <div key={w.label} className="col-12 col-sm-6 col-md-3 d-flex align-items-stretch">
          {w.label === 'Steps' && <StepsChart data={w} />}
          {w.label === 'Water' && <WaterChart data={w} />}
          {w.label === 'Calories' && <CaloriesChart data={w} />}
          {w.label === 'Heart Rate' && <HeartRateChart data={w} />}
        </div>
      ))}
    </div>

    <div className="row g-4 mb-4">
      <div className="col-12 col-lg-6">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">Activity</h5>
            <div className="card-subtitle mb-2 text-muted">Weekly</div>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={activityData}>
                <XAxis dataKey="day" axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip />
                <Bar dataKey="value" radius={[8, 8, 0, 0]} fill="#fb923c" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">Progress</h5>
            <div className="card-subtitle mb-2 text-muted">Weekly</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <PieChart width={100} height={100}>
                <Pie
                  data={progressData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={30}
                  outerRadius={45}
                  label={({ name, value }) => (name === 'Stretching' ? `${value}hrs` : '')}
                >
                  {progressData.map((entry, idx) => (
                    <Cell key={`cell-${idx}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
              <div>
                {progressData.map((item) => (
                  <div key={item.name} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, marginBottom: 4 }}>
                    <span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', background: item.color }}></span>
                    {item.name} <span style={{ color: '#888', marginLeft: 4 }}>{item.value} hrs</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="row g-4 mb-4">
      <div className="col-12 col-lg-6">
        <h5 className="mb-3">Recommended Trainer for you</h5>
        <div className="d-flex gap-3 flex-wrap">
          {trainers.map((t, i) => (
            <div key={i} className="card text-center shadow-sm rounded-3" style={{ width: '18rem', overflow: 'hidden' }}>
              
              <div className="card-body d-flex flex-column align-items-center pt-0">
                <img src={t.img} alt={t.name} className="rounded-circle mb-2" style={{ width: 64, height: 64,  border: '3px solid #fff', objectFit: 'cover', position: 'relative', zIndex: 1 }} />
                <h6 className="card-title mb-1">{t.name}</h6>
                <p className="card-subtitle mb-2 text-muted">{t.title}</p>
                <div className="d-flex align-items-center mb-2" style={{ fontSize: '0.9rem', color: '#f59e42' }}>
                  <span>⭐ {t.stars}</span>
                  <span className="text-muted ms-2">💬 {t.likes}</span>
                </div>
                <a href="#" className="btn btn-primary btn-sm mt-auto">View Profile</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-12 col-lg-6">
        <h5 className="mb-3">Featured Diet Menu</h5>
        <div className="card">
          <div className="card-body">
            {dietMenu.map((meal, i) => (
              <div key={i} className="mb-3">
                
                <div className="d-flex justify-content-between align-items-center mt-3 mb-2">
                  <span className="fw-bold" style={{ color: '#818cf8', fontSize: '0.9rem' }}>{meal.meal}</span>
                  <span className="text-muted" style={{ fontSize: '0.8rem' }}>{meal.time}</span>
                </div>
                {meal.items.map((item, idx) => (
                  <div key={idx} className="d-flex align-items-center mb-3">
                    
                    <div className="flex-grow-1">
                      <div className="fw-bold mb-1" style={{ fontSize: '0.9rem' }}>{item.name}</div>
                      <div className="d-flex gap-2 text-muted mb-1" style={{ fontSize: '0.8rem' }}>
                        <span>{item.carbs}% carbs</span>
                        <span>{item.protein}% protein</span>
                        <span>{item.fat}% Fat</span>
                      </div>
                      <div className="d-flex gap-1">
                        <div style={{ height: 4, width: `${item.carbs * 2}px`, background: '#06b6d4', borderRadius: 2 }}></div>
                        <div style={{ height: 4, width: `${item.protein * 2}px`, background: '#f59e42', borderRadius: 2 }}></div>
                        <div style={{ height: 4, width: `${item.fat * 2}px`, background: '#f43f5e', borderRadius: 2 }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DashboardPage; 
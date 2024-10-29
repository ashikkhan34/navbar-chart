import { LineChart as LChart, Line, CartesianGrid, XAxis, YAxis,BarChart,Bar, Tooltip } from 'recharts';
const LineChart = () => {

const subjectsMarks = [
        { id: 1, name: "Alice", math: 78, physics: 85, chemistry: 72 },
        { id: 2, name: "Bob", math: 92, physics: 88, chemistry: 79 },
        { id: 3, name: "Charlie", math: 65, physics: 70, chemistry: 68 },
        { id: 4, name: "David", math: 81, physics: 77, chemistry: 85 },
        { id: 5, name: "Eva", math: 90, physics: 94, chemistry: 88 },
        { id: 6, name: "Frank", math: 74, physics: 68, chemistry: 70 },
        { id: 7, name: "Grace", math: 88, physics: 92, chemistry: 86 },
        { id: 8, name: "Hannah", math: 80, physics: 75, chemistry: 82 },
        { id: 9, name: "Ian", math: 85, physics: 79, chemistry: 84 },
        { id: 10, name: "Jack", math: 93, physics: 91, chemistry: 10 }
    ]



    return (
        <div>
           <div className='mb-20'>
           <LChart width={1000} height={400} data={subjectsMarks}>
                <Line dataKey={'math'} stroke='red'></Line>
                <Line dataKey={'physics'} stroke='blue'></Line>
                <Line dataKey={'chemistry'} stroke='green'></Line>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>

            </LChart>
           </div>

            <div>
                {/* bar chart  */}
            <BarChart width={1200} height={500} data={subjectsMarks}>
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey={'name'}></XAxis>
            <YAxis></YAxis>
            <Bar dataKey='math' stroke='red' fill='red'></Bar>
            <Bar dataKey='physics' stroke='blue' fill='blue' ></Bar>
            <Bar dataKey='chemistry' stroke='green' fill='green'></Bar>
            <Tooltip></Tooltip>
            </BarChart>
            
            </div>
            

        </div>
    );
};

export default LineChart;
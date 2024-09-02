import { JSXElementConstructor, Key, ReactElement, ReactNode, useState } from 'react';
import { format, eachDayOfInterval } from 'date-fns';
import Header from '../../components/header';
import Menu from '../../components/menu';

const AdminDashboard = () => {
    
      // Replace these dates with your desired range
      const startDate = new Date('2024-08-15');
      const endDate = new Date('2024-08-25');
    
      // Generate dates based on the range
      const dateRange = eachDayOfInterval({ start: startDate, end: endDate }).map((date: any) => ({
        date: format(date, 'yyyy-MM-dd'),
        hours: 0,
      }));
    
      const [dates, setDates] = useState(dateRange);
    
      const handleHoursChange = (index: number, value: string) => {
        const newDates = [...dates];
        newDates[index].hours = parseFloat(value) || 0;
        setDates(newDates);
      };
    
      const totalHours = dates.reduce((acc: any, curr: { hours: any; }) => acc + curr.hours, 0);
    
      return (
        <div className="app">
        <Menu />
          <div className="main-content">
              <Header />
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Hours Worked</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dates.map((entry: { date: boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Key | null | undefined; hours: string | number | readonly string[] | undefined; }, index: number) => (
                      <tr key={String(entry.date)}>
                        <td>{String(entry.date)}</td>
                        <td>
                          <input
                            type="number"
                            value={entry.hours}
                            onChange={(e) => handleHoursChange(index, e.target.value)}
                          />
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td><strong>Total</strong></td>
                      <td>{totalHours}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
          </div>
        </div>
      );
    };
    

export default AdminDashboard;
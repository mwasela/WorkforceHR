import React from 'react'
import axios from '../helpers/axios.jsx'
import { ProTable , TableDropdown } from '@ant-design/pro-table';
import { Button } from 'antd';
import { ProFormSelect } from '@ant-design/pro-form';
import { PageContainer } from '@ant-design/pro-layout';



const columns = [
  {
    title: 'Name',
    dataIndex: ['Personnel'],
    width: 180,
    key: 'Name',
    hideInSearch: true,
    render: (_, record) => (
      record.Personnel.mgr_wrkpersonnels_fname + ' ' + record.Personnel.mgr_wrkpersonnels_surname
    )
    ,
  },
  {
    title: 'Employee ID',
    dataIndex: ['Personnel','mgr_wrkpersonnels_empid'],
    render: (_) => <a>{_}</a>,
    width: 180,
    key: 'mgr_wrkpersonnels_empid',
  },
  {
    title: 'Shift',
    dataIndex: ['Shift', 'mgr_wrkshifts_name'],
    width: 180,
    key: 'Shift',
  },
  {
    title: 'Start Time',
    dataIndex: ['Shift', 'mgr_wrkshifts_start'],
    width: 180,
    key: 'mgr_wrkshifts_start',
    hideInSearch: true,
  },
  {
    title: 'Duration',
    dataIndex: ['Shift', 'mgr_wrkshifts_duration'],
    width: 180,
    key: 'mgr_wrkshifts_duration',
    hideInSearch: true,
    render : (_, record) => (
      record.Shift.mgr_wrkshifts_duration + ' Hours'
    )

    // render: (_, record) => {
    //   let startTime = record.Shift.mgr_wrkshifts_start;
    //   console.log(startTime);
    //   let endTime = new Date(startTime + record.Shift.mgr_wrkshifts_duration * 60 * 60 * 1000);
    //   console.log(endTime);
    //   return endTime;
    // }
  },
  {
    title: 'Date',
    dataIndex: ['mgr_wrkschedules_date'],
    width: 180,
    key: 'mgr_wrkschedules_date',
    valueType: "dateRange",
    render: (_, record) => (
      record.mgr_wrkschedules_date
    )
  },

  // {
  //   title: 'Action',
  //   key: 'action',
  //   width: 180,
  //   render: () => [
  //     <a key="editable">Edit</a>,
  //     <a key="delete">Delete</a>,
  //   ],
  // },
];
 
const  Home = () => {
  return (
  <PageContainer>
  <ProTable
    columns={columns}
    request={async (params = {}) => {
      const response = await axios.get('dbSync', {
        params
      });

      console.log("response", response.data);
      return {
        data: response.data,
        page: params.current,
        success: true,
        total: response.data.total,
      };
    }}
     pagination={{
      pageSize: 10,
    }}
    dateFormatter="string"
    headerTitle="Employee Schedules"
    toolBarRender={() => [
      <Button key="button" icon={<TableDropdown />} type="primary">
        New
      </Button>,
    ]}
  
/>
</PageContainer>

)

}

export default Home;
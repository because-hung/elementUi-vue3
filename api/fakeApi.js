export const fetchFakeApi = () => {
  return new Promise((resolve) => {
    const res = {
      data: {
        infos: [
          {
            id: 1,
            content: '新增 aaaa 006 <br/> 新增 [000999]',
            operate: '新增',
            knowledge: '新增用戶',
            account: 'admin',
            time: '201314123',
            ip: '120.19.20.8'
          },
          {
            id: 2,
            content: '新增 aaaa 006 <br/> 新增 [000999]',
            operate: '新增',
            knowledge: '新增用戶',
            account: 'admin',
            time: '201314123',
            ip: '120.19.20.8'
          },
          {
            id: 3,
            content: '新增 aaaa 006 <br/> 新增 [000999]',
            operate: '新增',
            knowledge: '新增用戶',
            account: 'admin',
            time: '201314123',
            ip: '120.19.20.8'
          },
          {
            id: 4,
            content: '新增 aaaa 006 <br/> 新增 [000999]',
            operate: '新增',
            knowledge: '新增用戶',
            account: 'admin',
            time: '201314123',
            ip: '120.19.20.8'
          },
          {
            id: 5,
            content: '新增 aaaa 006 <br/> 新增 [000999]',
            operate: '新增',
            knowledge: '新增用戶',
            account: 'admin',
            time: '201314123',
            ip: '120.19.20.8'
          },
          {
            id: 6,
            content: '新增 aaaa 006 <br/> 新增 [000999]',
            operate: '新增',
            knowledge: '新增用戶',
            account: 'admin',
            time: '201314123',
            ip: '120.19.20.8'
          },
          {
            id: 7,
            content: '新增 aaaa 006 <br/> 新增 [000999]',
            operate: '新增',
            knowledge: '新增用戶',
            account: 'admin',
            time: '201314123',
            ip: '120.19.20.8'
          },
          {
            id: 8,
            content: '新增 aaaa 006 <br/> 新增 [000999]',
            operate: '新增',
            knowledge: '新增用戶',
            account: 'admin',
            time: '201314123',
            ip: '120.19.20.8'
          },
          {
            id: 9,
            content: '新增 aaaa 006 <br/> 新增 [000999]',
            operate: '新增',
            knowledge: '新增用戶',
            account: 'admin',
            time: '201314123',
            ip: '120.19.20.8'
          }
        ]
      }
    }
    setTimeout(() => {
      resolve(res)
    }, 2000)
  })
}

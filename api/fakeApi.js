export const fetchFakeApi = () => {
  return new Promise((resolve) => {
    const res = {
      data: {
        infos: [
          {
            id: 1,
            content: '新增 <span class="appd"> aaaa 006 </span> <br/> 新增 <span class="appX"> [000999] </span>',
            operate: '新增',
            knowledge: '新增用戶',
            account: 'admin',
            time: '201314123',
            ip: '120.19.20.8'
          },
          {
            id: 2,
            content: '新增 <span class="appd"> aaaa 006 </span> <br/> 新增 <span class="appX"> [000999] </span>',
            operate: '新增',
            knowledge: '新增用戶',
            account: 'admin',
            time: '201314123',
            ip: '120.19.20.8'
          },
          {
            id: 3,
            content: '新增 <span class="appd"> aaaa 006 </span> <br/> 新增 <span class="appX"> [000999] </span>',
            operate: '新增',
            knowledge: '',
            account: 'admin',
            time: '201314123',
            ip: '120.19.20.8'
          },
          {
            id: 4,
            content: '新增 <span class="appd"> aaaa 006 </span> <br/> 新增 <span class="appX"> [000999] </span>',
            operate: '新增',
            knowledge: '新增用戶',
            account: 'admin',
            time: '201314123',
            ip: '120.19.20.8'
          },
          {
            id: 5,
            content: '新增 <span class="appd"> aaaa 006 </span> <br/> 新增 <span class="appX"> [000999] </span>',
            operate: '',
            knowledge: '新增用戶',
            account: 'admin',
            time: '201314123',
            ip: '120.19.20.8'
          },
          {
            id: 6,
            content: '新增 <span class="appd"> aaaa 006 </span> <br/> 新增 <span class="appX"> [000999] </span>',
            operate: '新增',
            knowledge: '新增用戶',
            account: 'admin',
            time: '201314123',
            ip: ''
          },
          {
            id: 7,
            content: '新增 <span class="appd"> aaaa 006 </span> <br/> 新增 <span class="appX"> [000999] </span>',
            operate: '新增',
            knowledge: '新增用戶',
            account: 'admin',
            time: '201314123',
            ip: '120.19.20.8'
          },
          {
            id: 8,
            content: '新增 <span class="appd"> aaaa 006 </span> <br/> 新增 <span class="appX"> [000999] </span>',
            operate: '新增',
            knowledge: '新增用戶',
            account: 'admin',
            time: '201314123',
            ip: '120.19.20.8'
          },
          {
            id: 9,
            content: '新增 <span class="appd"> aaaa 006 </span> <br/> 新增 <span class="appX"> [000999] </span>',
            operate: '新增',
            knowledge: '新增用戶',
            account: 'admin',
            time: '201314123',
            ip: '120.19.20.8'
          }
        ],
        totalCount: 9
      }
    }
    setTimeout(() => {
      resolve(res)
    }, 2000)
  })
}

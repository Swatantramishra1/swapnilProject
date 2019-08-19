let data = [
  {
    Global_Id: "5005070367",
    Pmenuid: "2",
    MenuId: "6",
    ParentMenuDes: "Model Master",
    ChiledtMenuDes: "3. Create New Categories/Series",
  },
  {
    Global_Id: "5005070367",
    Pmenuid: "3",
    MenuId: "8",
    ParentMenuDes: "Transaction",
    ChiledtMenuDes: "Test Trans1",
  },
  {
    Global_Id: "5005070367",
    Pmenuid: "2",
    MenuId: "12",
    ParentMenuDes: "Model Master",
    ChiledtMenuDes: "2. Add Catalogue Name(Model) to TeamSite",
  },
  {
    Global_Id: "5005070367",
    Pmenuid: "2",
    MenuId: "10",
    ParentMenuDes: "Model Master",
    ChiledtMenuDes: "4. Model Master Report",
  },
  {
    Global_Id: "5005070367",
    Pmenuid: "5",
    MenuId: "14",
    ParentMenuDes: "MyAccount",
    ChiledtMenuDes: "Logout",
  },
  {
    Global_Id: "5005070367",
    Pmenuid: "5",
    MenuId: "15",
    ParentMenuDes: "MyAccount",
    ChiledtMenuDes: "Change Password",
  },
  {
    Global_Id: "5005070367",
    Pmenuid: "2",
    MenuId: "22",
    ParentMenuDes: "Model Master",
    ChiledtMenuDes: "5. Maintain Category Display Name",
  },
  {
    Global_Id: "5005070367",
    Pmenuid: "4",
    MenuId: "21",
    ParentMenuDes: "Reviews",
    ChiledtMenuDes: "CRR Upload",
  },
  {
    Global_Id: "5005070367",
    Pmenuid: "16",
    MenuId: "17",
    ParentMenuDes: "GWT Price",
    ChiledtMenuDes: "Download Price",
  },
  {
    Global_Id: "5005070367",
    Pmenuid: "16",
    MenuId: "18",
    ParentMenuDes: "GWT Price",
    ChiledtMenuDes: "Upload Price (CSV)",
  },
  {
    Global_Id: "5005070367",
    Pmenuid: "16",
    MenuId: "19",
    ParentMenuDes: "GWT Price",
    ChiledtMenuDes: "Update Price",
  },
  {
    Global_Id: "5005070367",
    Pmenuid: "23",
    MenuId: "24",
    ParentMenuDes: "GWT Models",
    ChiledtMenuDes: "Search PDP Models",
  },
];

let resultObj = {};
let obj = {};

for (let i = 0; i < data.length; i++) {
  if (obj.hasOwnProperty(data[i].Pmenuid)) {
    obj[data[i].Pmenuid].child.push({
      [data[i].MenuId]: data[i].ChiledtMenuDes,
    });
  } else {
    obj[data[i].Pmenuid] = {
      name: data[i].ParentMenuDes,
      child: [
        {
          [data[i].MenuId]: data[i].ChiledtMenuDes,
        },
      ],
    };
  }
}

console.log(obj);

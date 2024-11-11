import {create} from 'zustand';



const systemStore = create((set, get)=>({
  data: {},
  version: 0,
  isLoading: true,
  failed: false,
  
}));


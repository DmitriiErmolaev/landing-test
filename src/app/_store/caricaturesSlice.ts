import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ICaricature } from '../_types/types';

interface CounterState {
  data: ICaricature[],
  loading: boolean,
  error: string | null,
}

const initialState: CounterState = {
  data: [],
  loading: false,
  error: null,
};

const staticCaricatures:ICaricature[] = [
  {
    title: 'Карикатуры МК на наши Нулевые и не только...',
    description: `Пробовали что угодно, только не сигареты,
    Забыли мгновенно, всё было и прошло.
    Но вдруг из треков, как эхо из старой плёнки,
    С тоской вернусь в те дни, где узнал, что...`,
    id:'1',
    url: '/images/image1.png'
  },
  {
    title: 'Карикатуры МК на наши Нулевые и не только...',
    description: `Живу вполне неплохо, сладкий чай глотаю,
    Печальные истории на новом MacBooke набираю.`,
    id:'2',
    url: '/images/image2.png'
  },
  {
    title: 'Карикатуры МК на наши Нулевые и не только...',
    description: `Разделять лавочки с другом — это весело, без сомненья, Но решать крупные вопросы — уже иное измерение. Как же одному справляться с задачами и там, и тут?`,
    id:'3',
    url: '/images/image3.png'
  },
  {
    title: 'Карикатуры МК на наши Нулевые и не только...',
    description: `Ссорились, вставляя крепкие слова на языке чужом, Но это просто модно, значит, всё нормально в том.`,
    id:'4',
    url: '/images/image4.png'
  },
]

export const fetchCaricatures = createAsyncThunk(
  'caricatures/fetchCaricatures',
  async () => {
    // Имитация задержки
    const blob = new Blob([JSON.stringify(staticCaricatures)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch caricatures');
    }
    const data:ICaricature[] = await response.json()
    return data
  }
);

const caricaturesSlice = createSlice({
  name: 'caricatures',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCaricatures.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCaricatures.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCaricatures.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Ошибка загрузки данных';
      });
  },
});

export default caricaturesSlice.reducer;
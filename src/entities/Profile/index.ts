export { ProfileCard } from './ui/ProfileCard/ProfileCard';

export { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';

export type { Profile, ProfileSchema } from './model/types/ProfileSchema';

export {
  profileActions,
  profileReducer
} from './model/slice/profileSlice';

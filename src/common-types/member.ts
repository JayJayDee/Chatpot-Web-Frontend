type NickRegions = 'ko' | 'en' | 'ja';
export type Nick = { [Region in NickRegions]: string };

export interface Avatar {
  profile_img: string;
  profile_thumb: string;
}

export interface Member {
  token: string;
  nick: Nick;
  avatar: Avatar;
}
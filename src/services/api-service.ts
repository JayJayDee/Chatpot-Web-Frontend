import { Member } from '@/common-types';

interface MemberJoinParam {
  region: string;
  language: string;
  gender?: 'M' | 'F';
}

interface MemberJoinRes extends Member {
  passphrase: string;
}

const requestMemberJoin =
  async (param: MemberJoinParam): Promise<MemberJoinRes | null> => {
    return null;
  };

export {
  requestMemberJoin
};
import type { PostType } from '@/types';
import type { MessageKey } from './messages.zh';

export const POST_TYPE_MSG: Record<PostType, MessageKey> = {
  discussion: 'post.type.discussion',
  question: 'post.type.question',
  guide: 'post.type.guide',
  diary: 'post.type.diary',
  marketplace: 'post.type.marketplace',
  roommate: 'post.type.roommate',
  event: 'post.type.event',
  job: 'post.type.job',
};

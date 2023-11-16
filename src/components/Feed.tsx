import { Box } from '@mui/material';
import { data } from '../data';
import { Post } from './Post';

export const Feed = () => {
  return (
    <Box flex={4} p={2}>
      {data.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </Box>
  );
};

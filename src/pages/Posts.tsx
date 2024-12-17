import { useEffect, useState } from 'react';

import { Button } from '../components/Button/Button';
import { Card } from '../components/Card/Card';
import { ImageCard } from '../components/ImageCard/ImageCard';
import { ErrorState } from '../components/shared/ErrorState';
import { LoadingState } from '../components/shared/LoadingState';

import { axiosJsonPlaceHolderInstance } from '../services/api';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface Image {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

// Custom hook to handle data fetching
const useFetchData = <T,>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axiosJsonPlaceHolderInstance.get(endpoint);
      setData(response.data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  return { data, loading, error, refetch: fetchData };
};

export const Posts = () => {
  const [displayMode, setDisplayMode] = useState<'posts' | 'images'>('posts');

  const {
    data: posts,
    loading: postsLoading,
    error: postsError,
    refetch: refetchPosts,
  } = useFetchData<Post>('/posts');

  const {
    data: images,
    loading: imagesLoading,
    error: imagesError,
    refetch: refetchImages,
  } = useFetchData<Image>('/albums/1/photos');

  // Simple conditional assignments
  const isLoading = displayMode === 'posts' ? postsLoading : imagesLoading;
  const error = displayMode === 'posts' ? postsError : imagesError;
  const refetch = displayMode === 'posts' ? refetchPosts : refetchImages;

  if (isLoading) return <LoadingState />;
  if (error) return <ErrorState message={error} onRetry={refetch} />;

  return (
    <div>
      <div className="flex justify-center gap-4 mb-6 mt-6">
        <Button
          className={`px-4 py-2 rounded ${
            displayMode === 'posts' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          variant="primary"
          onClick={() => setDisplayMode('posts')}
          label="Show Posts"
        />
        <Button
          className={`px-4 py-2 rounded ${
            displayMode === 'images' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          variant="primary"
          onClick={() => setDisplayMode('images')}
          label="Show Images"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8">
          {displayMode === 'posts'
            ? posts.map((post) => (
                <Card
                  key={post.id}
                  title={post.title}
                  description={post.body}
                />
              ))
            : images.map((image) => (
                <ImageCard
                  key={image.id}
                  title={image.title}
                  imageUrl={image.url}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

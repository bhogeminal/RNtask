import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import CommentList from './CommentList';
import Dropdownpicker from './Dropdownpicker';

const MainComponent = () => {
  const [comments, setComments] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data => {
        setComments(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}

      {!isLoading && (
        <View>
          <Dropdownpicker
            selectedValue={selectedPostId}
            onValueChange={(itemValue) => setSelectedPostId(itemValue)}
            posts={comments}
          />
          {selectedPostId !== null && <CommentList comments={comments.filter(comment => comment.postId === selectedPostId)} />}
        </View>
      )}
    </View>
  );
};

export default MainComponent;

import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

const CommentList = ({comments}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Post Details</Text>
      <ScrollView style={styles.scrollView}>
        {comments.map(comment => {
          console.log('comments', comment);
          return (
            <View key={comment.id} style={styles.commentBox}>
              <Text style={styles.commentText}>{comment.body}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  scrollView: {
    height: 600,
  },
  commentBox: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    flex: 1,
  },
  commentText: {
    fontSize: 16,
  },
});

export default CommentList;

import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
    border: '1px solid black',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  question: {
    fontSize: 16,
    marginBottom: 10,
  },
  answer: {
    fontSize: 16,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  correctAnswer: {
    border: '3px solid green',
  },
  incorrectAnswer: {
    border: '3px solid red',
  },
});

// Create Document Component
const ResultPdf = ({ list }) => {
  const sortedQuestions = list.answer.sort((a, b) => {
    const idA = parseInt(a.question_id.replace(/\D/g, ''), 10);
    const idB = parseInt(b.question_id.replace(/\D/g, ''), 10);
    return idA - idB;
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Happy Plum Mandarin Result Level 1</Text>
          <View>
            <Text style={styles.subtitle}>Name: {list.name}</Text>
          </View>
          {sortedQuestions.map((item, index) => (
            <View key={item.question_id} style={styles.section}>
              <Text style={styles.question}>{index + 1}. {item.question_name}</Text>
              <Text
                style={[
                  styles.answer,
                  item.is_correct ? styles.correctAnswer : styles.incorrectAnswer
                ]}
              >
                {item.user_answer}
              </Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};



export default ResultPdf;

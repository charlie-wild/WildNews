import axios from 'axios';
const BASE_URL = 'https://ncwildnews.herokuapp.com/api';

export const getTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}/topics`);
  return data.topics;
}

export const getArticles = async TOPIC => {
  const URL = TOPIC ? `${BASE_URL}/topics/${TOPIC}/articles` : `${BASE_URL}/articles`
  const { data } = await axios.get(URL);
  return data.articles;

}

export const getArticleById = async article_id => {
  const { data } = await axios.get(`${BASE_URL}/articles/${article_id}`);
  return data.article;
}

export const getArticleComments = async article_id => {
  const { data } = await axios.get(`${BASE_URL}/articles/${article_id}/comments`);
  return data.comments;
}

export const getUser = async username => {
  const { data } = await axios.get(`${BASE_URL}/users/${username}`);
  return data.user;
}

export const getComments = async () => {
  const { data } = await axios.get(`${BASE_URL}/comments`)
  return data.comments;
}

export const postTopic = async newTopic => {
  const { data } = await axios.post(`${BASE_URL}/topics`, newTopic)
  return data.topic;
}

export const postArticle = async (topic, newArticle) => {
  const { data } = await axios.post(`${BASE_URL}/topics/${topic}/articles`, newArticle)
  return data.article;
}

import axios from "axios";
const BASE_URL = "https://ncwildnews.herokuapp.com/api";

export const getTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}/topics`);
  return data.topics;
};

export const getArticles = async TOPIC => {
  const URL = TOPIC
    ? `${BASE_URL}/topics/${TOPIC}/articles`
    : `${BASE_URL}/articles`;
  const { data } = await axios.get(URL);
  return data.articles;
};

export const changePage = async (page, TOPIC) => {
  const URL = TOPIC
    ? `${BASE_URL}/topics/${TOPIC}/articles?p=${page}`
    : `${BASE_URL}/articles?p=${page}`;
  const { data } = await axios.get(URL);
  return data.articles;
};

export const changeCommentPage = async (page, article_id) => {
  const URL = `${BASE_URL}/articles/${article_id}/comments?p=${page}`;
  const { data } = await axios.get(URL);
  return data.comments;
};

export const getArticleById = async article_id => {
  const { data } = await axios.get(`${BASE_URL}/articles/${article_id}`);
  return data.article;
};

export const getArticleComments = async article_id => {
  const { data } = await axios.get(
    `${BASE_URL}/articles/${article_id}/comments`
  );
  return data.comments;
};

export const getUser = async username => {
  const { data } = await axios.get(`${BASE_URL}/users/${username}`);
  return data.user;
};

export const getUsers = async () => {
  const { data } = await axios.get(`${BASE_URL}/users`);
  return data.users;
};

export const postTopic = async (slug, description) => {
  const { data } = await axios.post(`${BASE_URL}/topics`, {
    slug,
    description
  });
  return data.topic[0];
};

export const postArticle = async (topic, newArticle) => {
  const { data } = await axios.post(
    `${BASE_URL}/topics/${topic}/articles`,
    newArticle
  );
  return data.article;
};

export const postComment = async (article_id, newComment) => {
  const { data } = await axios.post(
    `${BASE_URL}/articles/${article_id}/comments`,
    newComment
  );
  return data.comment;
};

export const vote = async (article_id, inc_votes) => {
  const { data } = await axios.patch(`${BASE_URL}/articles/${article_id}`, {
    inc_votes
  });
  return data.votes;
};

export const voteComment = async (article_id, comment_id, inc_votes) => {
  const { data } = await axios.patch(
    `${BASE_URL}/articles/${article_id}/comments/${comment_id}`,
    { inc_votes }
  );
  return data.votes;
};

export const deleteArticle = async article_id => {
  const { data } = await axios.delete(`${BASE_URL}/articles/${article_id}`);
  return data.article;
};

export const deleteComment = async (article_id, comment_id) => {
  const { data } = await axios.delete(
    `${BASE_URL}/articles/${article_id}/comments/${comment_id}`
  );
  return data.comment;
};

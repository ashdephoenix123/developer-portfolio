"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram, FaHeart, FaComment, FaRetweet } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const cardVariant = {
  initial: { opacity: 0, y: 16 },
  final: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const InstagramCard = ({ post }) => (
  <motion.div variants={cardVariant} className="social-card social-card--ig">
    {/* Header */}
    <div className="social-card__header">
      <div className="social-card__avatar-wrap">
        <Image
          src={post.avatar}
          width={32}
          height={32}
          alt={post.username}
          className="social-card__avatar"
        />
        <div className="social-card__avatar-ring social-card__avatar-ring--ig" />
      </div>
      <div className="social-card__user-info">
        <span className="social-card__username">{post.username}</span>
        <span className="social-card__time">{post.timeAgo}</span>
      </div>
      <FaInstagram className="social-card__platform-icon social-card__platform-icon--ig" />
    </div>

    {/* Image placeholder */}
    <div className="social-card__image social-card__image--ig" />

    {/* Engagement */}
    <div className="social-card__engagement">
      <span className="social-card__stat">
        <FaHeart className="social-card__stat-icon social-card__stat-icon--ig" />
        {post.likes}
      </span>
      <span className="social-card__stat">
        <FaComment className="social-card__stat-icon" />
        {post.comments}
      </span>
    </div>

    {/* Caption */}
    <p className="social-card__caption">
      <strong>{post.username}</strong> {post.caption}
    </p>
  </motion.div>
);

const TwitterCard = ({ post }) => (
  <motion.div variants={cardVariant} className="social-card social-card--tw">
    {/* Header */}
    <div className="social-card__header">
      <Image
        src={post.avatar}
        width={40}
        height={40}
        alt={post.name}
        className="social-card__avatar"
      />
      <div className="social-card__user-info">
        <div className="flex items-center gap-1">
          <span className="social-card__username">{post.name}</span>
        </div>
        <span className="social-card__handle">{post.handle}</span>
      </div>
      <FaXTwitter className="social-card__platform-icon social-card__platform-icon--tw" />
    </div>

    {/* Content */}
    <p className="social-card__tweet">{post.content}</p>

    {/* Engagement */}
    <div className="social-card__engagement social-card__engagement--tw">
      <span className="social-card__stat">
        <FaComment className="social-card__stat-icon" />
        {post.replies}
      </span>
      <span className="social-card__stat">
        <FaRetweet className="social-card__stat-icon social-card__stat-icon--rt" />
        {post.retweets}
      </span>
      <span className="social-card__stat">
        <FaHeart className="social-card__stat-icon social-card__stat-icon--tw" />
        {post.likes}
      </span>
      <span className="social-card__time-tweet">{post.timeAgo}</span>
    </div>
  </motion.div>
);

const containerVariant = {
  initial: {},
  final: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const SocialFeed = ({ platform, posts }) => {
  return (
    <motion.div
      variants={containerVariant}
      initial="initial"
      whileInView="final"
      viewport={{ once: true, margin: "-40px" }}
      className="social-feed"
    >
      <div className="social-feed__header">
        {platform === "instagram" ? (
          <FaInstagram className="social-feed__icon social-feed__icon--ig" />
        ) : (
          <FaXTwitter className="social-feed__icon social-feed__icon--tw" />
        )}
        <h3 className="social-feed__title">
          {platform === "instagram" ? "Instagram" : "X (Twitter)"}
        </h3>
      </div>
      <div className="social-feed__grid">
        {posts.map((post) =>
          platform === "instagram" ? (
            <InstagramCard key={post.id} post={post} />
          ) : (
            <TwitterCard key={post.id} post={post} />
          )
        )}
      </div>
    </motion.div>
  );
};

export default SocialFeed;

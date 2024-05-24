<?php

Class Post {
    public $post_aid;
    public $post_title;
    public $post_image;
    public $post_author;
    public $post_category;
    public $post_is_active;
    public $post_article;
    public $post_publish_date;
    public $post_datetime;
    public $post_created;

    public $post_search;

    public $connection;
    public $lastInsertedId;
    public $tblPost;
    

    public function __construct($db) {
        $this->connection = $db;
        $this->tblPost = "post";
    }

    public function create() {
        try {
            $sql = "insert into {$this->tblPost} ";
            $sql .= "( post_title, ";
            $sql .= "post_category, ";
            $sql .= "post_image, ";
            $sql .= "post_author, ";
            $sql .= "post_is_active, ";
            $sql .= "post_article, ";
            $sql .= "post_publish_date, ";
            $sql .= "post_created, ";
            $sql .= "post_datetime ) values ( ";
            $sql .= ":post_title, ";
            $sql .= ":post_category, ";
            $sql .= ":post_image, ";
            $sql .= ":post_author, ";
            $sql .= ":post_is_active, ";
            $sql .= ":post_article, ";
            $sql .= ":post_publish_date, ";
            $sql .= ":post_created, ";
            $sql .= ":post_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "post_title" => $this->post_title,
                "post_category" => $this->post_category,
                "post_image" => $this->post_image,
                "post_author" => $this->post_author,
                "post_is_active" => $this->post_is_active,
                "post_article" => $this->post_article,
                "post_publish_date" => $this->post_publish_date,
                "post_created" => $this->post_created,
                "post_datetime" => $this->post_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }

        return $query;
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblPost} ";
            $sql .= "order by post_is_active desc ";
            $query = $this->connection->query($sql);
            
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    
    public function readById()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblPost} ";
            $sql .= "where post_aid = :post_aid ";
            $sql .= "order by post_aid asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "post_aid" => $this->post_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
    
    public function delete()
    {
        try {
            $sql = "delete from {$this->tblPost} ";
            $sql .= "where post_aid = :post_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "post_aid" => $this->post_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblPost} set ";
            $sql .= "post_title = :post_title, ";
            $sql .= "post_image = :post_image, ";
            $sql .= "post_author = :post_author, ";
            $sql .= "post_category = :post_category, ";
            $sql .= "post_article = :post_article, ";
            $sql .= "post_publish_date = :post_publish_date, ";
            $sql .= "post_datetime = :post_datetime ";
            $sql .= "where post_aid  = :post_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "post_title" => $this->post_title,
                "post_image" => $this->post_image,
                "post_author" => $this->post_author,
                "post_category" => $this->post_category,
                "post_article" => $this->post_article,
                "post_publish_date" => $this->post_publish_date,
                "post_datetime" => $this->post_datetime,
                "post_aid" => $this->post_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblPost} set ";
            $sql .= "post_is_active = :post_is_active, ";
            $sql .= "post_datetime = :post_datetime ";
            $sql .= "where post_aid  = :post_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "post_is_active" => $this->post_is_active,
                "post_datetime" => $this->post_datetime,
                "post_aid" => $this->post_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    //new
    public function search()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblPost} ";
            $sql .= "where post_title like :post_title ";
            $sql .= "order by post_is_active desc, ";
            $sql .= "post_title asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "post_title" => "%{$this->post_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
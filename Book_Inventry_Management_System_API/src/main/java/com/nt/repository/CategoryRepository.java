package com.nt.repository;

import org.springframework.data.jpa.repository.support.CrudMethodMetadata;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.nt.entity.Category;

@Repository
public interface CategoryRepository extends CrudRepository<Category	, Integer>{
	

}

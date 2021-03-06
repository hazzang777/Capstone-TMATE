package com.tmate.mapper;

import com.tmate.domain.Criteria;
import com.tmate.domain.EventDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface EventMapper {

    // 이벤트 리스트
    List<EventDTO> getListEvent(Criteria cri);

    // 이벤트 삽입
    int insert(EventDTO eventDTO);

    // 이벤트 비공개
    int remove(String e_id);

    // 이벤트 수정
    int update(EventDTO eventDTO);

    // 이벤트 상세페이지
    EventDTO read(String e_id);

    // 이벤트 토탈 수
    int getTotalCount(Criteria cri);

    // 이벤트 글 조회 수 증가
    void viewCount(String e_id);

}

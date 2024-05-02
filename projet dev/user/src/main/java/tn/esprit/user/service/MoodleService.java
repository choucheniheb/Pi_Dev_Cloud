package tn.esprit.user.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@Service
public class MoodleService {

    @Value("${moodle.api.url}")
    private String moodleUrl;

    @Value("${moodle.api.token}")
    private String token;

    private final RestTemplate restTemplate;

    public MoodleService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public String createCourse(String fullName, String shortName, int categoryId) {
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(moodleUrl + "/webservice/rest/server.php")
                .queryParam("wstoken", token)
                .queryParam("wsfunction", "core_course_create_courses")
                .queryParam("moodlewsrestformat", "json")
                .queryParam("courses[0][fullname]", fullName)
                .queryParam("courses[0][shortname]", shortName)
                .queryParam("courses[0][categoryid]", categoryId);

        return restTemplate.postForObject(builder.toUriString(), null, String.class);
    }
}

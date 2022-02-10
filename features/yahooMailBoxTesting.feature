Feature: Testing and verifying main fuctualities of yahoo mail service

  Scenario: 1. As a user, I can open login page of yahoo mail
    Given I am on start mail page
    When I click on "Sign in" button
    Then I should see the yahoo mail login page with the login form 

  Scenario: 2. As a user, I can log into yahoo mail 
    When I write 'qaautomation07@yahoo.com' in the Email field 
    And I click Next button
    And I write 'suHGals126' in the Password field 
    And I click Submit button
    Then I should see the authorised user yahoo mail service page 
  
  Scenario: 3. As a user, I can create new email
    When I click Compose button
    And I write 'vis_cesar@mail.ru' in the Address field 
    And I write 'Test subject' in the Subject field 
    And I write 'Hello, world! Hello, world! Hello, world!' in the Body field 
    Then I should see that all fields of email are filled correct

  Scenario: 4. As a user, I can save created email in Drafts folder and verify it's content
    When I click Drafts button
    Then I should see the created email on the top of the draft list
    And I should see that email time of creation matches the RegExp pattern
    When I click on the email that is on the top of the draft list
    Then I should see that Address field is filled by 'vis_cesar@mail.ru'
    And I should see that Subject field is filled by 'Test subject'
    And I should see that Body field is filled by 'Hello, world! Hello, world! Hello, world!'
    
  Scenario: 5. As a user, I can send email from Drafts folder and verify it's dissapeared from Drafts
    When I click Send Email button
    Then I should see the draft email dissapeared from draft emails list

  Scenario: 6. As a user, I can verify that just sent email apeared in Sent folder
    When I click Sent folder button
    Then I should see that just sent email apeared in sent list

  Scenario: 7. As a user, I can log off from mail page
    When I hover over Account icon
    And I click the Log off button
    Then I should see yahoo home page

    

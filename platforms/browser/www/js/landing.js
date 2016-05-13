/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
$(document).ready(function(){
    //need a method to get user info here
    loadOpenRounds(); 

    $('#display').on('click', '#button-to-prompt', function() {
        loadPrompt();
        getPrompt();
    })

    $('#display').on('click', '#button-to-contacts', function(event){
        loadContacts();
        getContacts();
    })

    $('#display').on('click', '#button-to-open-rounds', function() {
        loadOpenRounds();
        getOpenRounds();
    })

    $('#display').on('click', '#button-to-closed-rounds', function() {
        loadClosedRounds();
        getClosedRounds();
    })
})

function loadOpenRounds(){
    $('#display').load('html/open_rounds.html')
}

function loadContacts(){
    $('#display').load('html/contacts.html')
}

function loadPrompt(){
    $('#display').load('html/prompt.html')
}

function loadClosedRounds(){
    $('#display').load('html/closed_rounds.html')
}
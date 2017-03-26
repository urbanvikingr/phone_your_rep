# frozen_string_literal: true
desc 'Update app/generate-reps/reps.json raw data file from API'
task :update_reps do
  sh "curl 'https://phone-your-rep.herokuapp.com/reps?generate=true' -o\
    'app/generate-reps/reps.json'"
  puts `git add app/generate-reps/reps.json; git commit -m 'update reps.json'`
end

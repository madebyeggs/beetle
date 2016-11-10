class Contact < MailForm::Base
  
    attribute :name,      :validate => true
    attribute :email,     :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
    attribute :file,      :attachment => true
    attribute :message
    attributes :nickname,   :captcha => true

    def headers
      {
        :subject => "My Contact Form",
        :to => "ed_hamilton@live.com",
        :from => %("#{name}" <#{email}>)
      }
    end
  
end
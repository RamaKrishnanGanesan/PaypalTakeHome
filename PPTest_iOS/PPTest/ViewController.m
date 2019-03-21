//
//  ViewController.m
//  PPTest
//
//  Created by Anderson,Derek on 10/3/18.
//  Copyright © 2018 paypal. All rights reserved.
//

#import "ViewController.h"
#import <WebKit/WebKit.h>

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
  [super viewDidLoad];
  
//  NSBundle* bundle = [NSBundle bundleForClass:self.class];
//  NSString* filePath = [bundle pathForResource:@"ppTest" ofType:@"html"];
  
  WKWebView *webview=[[WKWebView alloc]initWithFrame:[UIScreen mainScreen].bounds];
  
    
    NSURL *nsurl= [NSURL URLWithString:@"http://localhost:3001/"];    //[NSURL fileURLWithPath:filePath];
  NSURLRequest *nsrequest=[NSURLRequest requestWithURL:nsurl];
  [webview loadRequest:nsrequest];
  [self.view addSubview:webview];
}


- (void)didReceiveMemoryWarning {
  [super didReceiveMemoryWarning];
  // Dispose of any resources that can be recreated.
}


@end
